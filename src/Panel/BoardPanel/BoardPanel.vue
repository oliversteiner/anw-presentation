<template>
  <div class="board-panel">
    <div v-if="showPanel" class="board-panel-wrapper">
      <Moveable class="movable" v-bind="movable" @drag="handleDrag">
        <div class="nicer-panel board-panel">
          <div class="toolbar" v-on:mousedown="movePanel()" v-on:mouseup="restPanel()" v-on:dblclick="toggleList()">
            <div class="toolbar-item">
              <div class="toolbar-icon"><font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon></div>
              <div class="toolbar-title">
                {{ $t('Boards') }}
              </div>
            </div>
            <div class="toolbar-item"></div>
            <div class="toolbar-item">
              <div class="toolbar-btn toolbar-btn-close" v-on:click="closePanel()">
                <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
              </div>
            </div>
          </div>
          <transition name="fade">
            <BoardList v-if="showList"></BoardList>
          </transition>
        </div>
      </Moveable>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// @ts-ignore - no proper declaration for vue-moveable
import Moveable from 'vue-moveable'
import BoardList from '@/components/BoardList/BoardList'

@Component({ components: { Moveable, BoardList } })
class BoardPanel extends Vue {


  // Panel Toggle
  showPanel = false
  showList = true

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
    this.showPanel = false
  }

  togglePanel() {
    this.showPanel = !this.showPanel
  }

  toggleList() {
    this.showList = !this.showList
  }

  movePanel() {
    this.movable.draggable = true
  }

  restPanel() {
    this.movable.draggable = false
  }

  created() {
    let eventId = null

    // Panel
    eventId = this.$bus.$on('toggle_panel', (params: any) => {
      if (params === 'boards') {
        this.togglePanel()
      }
    })

  }

  // @ts-ignore - no proper declaration for vue-moveable
  handleDrag({ target, transform }) {
    //  console.log('onDrag left, top', transform)
    target.style.transform = transform
  }
}

export default BoardPanel
</script>

<style lang="scss">
  @import 'BoardPanel';
</style>
