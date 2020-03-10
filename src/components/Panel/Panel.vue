<template>
  <div class="panel">
    <div :class="{ 'panel-modal-active': showModal }">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <Moveable class="movable no-close" v-bind="movable" @drag="handleDrag" v-click-outside="onClickOutside">
            <div class="nicer-panel board-panel">
              <div
                class="toolbar"
                v-if="opt.toolbar"
                @mousedown="movePanel()"
                @mouseup="restPanel()"
                @dblclick="toggleContent()"
              >
                <div class="toolbar-item">
                  <div class="toolbar-icon">
                    <font-awesome-icon :icon="[opt.icon.prefix, opt.icon.name]"></font-awesome-icon>
                  </div>
                  <div class="toolbar-title">
                    {{ opt.title }}
                  </div>
                </div>
                <div class="toolbar-item"></div>
                <div class="toolbar-item">
                  <div class="toolbar-btn toolbar-btn-close" @click="closePanel()">
                    <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
                  </div>
                </div>
              </div>
              <transition name="fade">
                <div v-if="showContent">
                  <div>
                    <slot></slot>
                  </div>
                </div>
              </transition>
            </div>
          </Moveable>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PanelStore } from '@/store'
// @ts-ignore - no proper declaration for vue-moveable
import vClickOutside from 'v-click-outside'
// @ts-ignore - no proper declaration for vue-moveable
import Moveable from 'vue-moveable'

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

export interface PanelOptions {
  icon: {
    prefix: string
    name: string
  }
  name: string
  title: string
  toolbar?: boolean
}

@Component({ components: { Moveable }, directives: { clickOutside: vClickOutside.directive } })
class Panel extends Vue {
  @Prop() options: PanelOptions | undefined
  @Prop() move: Moveable | undefined
  @Prop() modal: boolean | undefined

  // Options for Panel
  private opt: PanelOptions = {
    icon: {
      prefix: 'fas',    // FontAwesome Prefix
      name: 'triangle', // FontAwesome Name
    },
    name: 'panel',
    title: 'Panel',
    toolbar: true, // show Toolbar ?
  }

  // Panel Toggle
  showContent = true

  // Modal
  showModal = false

  // Panel Move
  movable: Moveable = {
    draggable: false,
    throttleDrag: 0,
    resizable: false,
    throttleResize: 1,
    keepRatio: false,
    scalable: false,
    throttleScale: 0,
    rotatable: false,
    throttleRotate: 0,
    pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
    origin: false,
    className: 'movable-panel',
  }

  closePanel() {
    PanelStore.closePanel(this.opt.name)
  }

  toggleContent() {
    this.showContent = !this.showContent
  }

  movePanel() {
    this.movable.draggable = true
  }

  restPanel() {
    this.movable.draggable = false
  }

  closeModal() {
    this.showModal = false
    this.$bus.$emit('modal', this.showModal)
  }

  @Watch('options')
  setOptions() {
    if (this.options) this.opt = this.options
  }

  @Watch('modal')
  setModal() {
    if (this.modal !== undefined) {
      this.showModal = this.modal
    }
  }

  created() {
    if (this.options) {
      this.opt = this.options
    }

    // Set optional "show Toolbar" to true if not defined
    this.opt.toolbar = this.options?.toolbar !== undefined ? this.options.toolbar : true

    // Set optional Prep "move" to default if not defined
    if (this.move !== undefined) {
      this.movable = this.move
    }

    // Set optional "show Modal" to false if not defined
    this.showModal = this.modal !== undefined ? this.modal : false
  }

  onClickOutside(event: any) {
    // console.log('Clicked outside. Event: ', event)
    this.closeModal()
  }

  // @ts-ignore - no proper declaration for vue-moveable
  handleDrag({ target, transform }) {
    //  console.log('onDrag left, top', transform)
    target.style.transform = transform
  }
}

export default Panel
</script>

<style lang="scss">
@import 'Panel';
</style>
