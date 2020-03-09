<template>
  <div class="panel">
    <Moveable class="movable" v-bind="movable" @drag="handleDrag">
      <div class="nicer-panel board-panel">
        <div class="toolbar" @mousedown="movePanel()" @mouseup="restPanel()" @dblclick="toggleContent()">
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
</template>

<script lang="ts">
import {PanelStore} from "@/store"

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
}

@Component({ components: { Moveable } })
class Panel extends Vue {
  @Prop() options: PanelOptions | undefined

  private opt: PanelOptions = {
    icon: {
      prefix: 'fas',
      name: 'triangle',
    },
    name: 'panel',
    title: 'Panel',
  }

  // Panel Toggle
  showContent = true

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

  // Content
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

  @Watch('options')
  setOptions() {
    if (this.options) this.opt = this.options
  }

  created() {
    if (this.options) {
      this.opt = this.options
    }
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
