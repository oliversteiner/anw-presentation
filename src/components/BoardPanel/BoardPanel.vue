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
            <ul v-if="showList" class="list">
              <li
                v-for="item in boards"
                class="list-item"
                :key="item.id"
                :class="{ active: currentBoardNr === item.id }"
                v-on:click="changeBoard(item.id)"
              >
                <span class="list-item-id">{{ item.id }}</span>
                <span class="list-item-title">{{ item.title }}</span>
                <span class="list-item-text">{{ item.description }}</span>
              </li>
            </ul>
          </transition>
        </div>
      </Moveable>
    </div>
  </div>
</template>

<script lang="ts">
import { Board } from '@/_models/board'
import { Message } from '@/_models/message'
import { Vue, Component, Prop } from 'vue-property-decorator'
// @ts-ignore - no proper declaration for vue-moveable
import Moveable from 'vue-moveable'

@Component({ components: { Moveable } })
class BoardPanel extends Vue {
  // Board State
  currentBoardNr = 1

  // Panel Toggle
  showPanel = true
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

  /**
   *  TODO: load board content from Store
   *  @return Board[]
   * **/
  get boards(): Board[] {
    // Board Seed
    const boardsArr: Board[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
    ]

    return boardsArr
  }

  // Boards
  changeBoard(id: number) {
    this.$bus.$emit('change_board', id)
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
    // Slides
    eventId = this.$bus.$on('board', (id: number) => {
      console.log('board', id)

      this.currentBoardNr = id
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
