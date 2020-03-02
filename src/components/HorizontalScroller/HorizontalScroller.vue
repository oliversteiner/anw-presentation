<template>
  <div class="horizontal-scroller">
    <!-- control-board -->
    <div v-if="debug" class="control-panel">
      <div class="panel-group">
        Board: <span> {{ currentBoardNr }}</span>
      </div>
      <div class="panel-group">
        <button v-on:click="scrollToFirstBoard()">First</button>
        <button v-on:click="scrollToPreviousBoard()">Prev</button>
        <button v-on:click="scrollToNextBoard()">Next</button>
        <button v-on:click="scrollToLastBoard()">Last</button>
      </div>

      <div class="panel-group">
        <button v-on:click="scrollToBoard(2)">2</button>
        <button v-on:click="scrollToBoard(9)">9</button>
      </div>
    </div>

    <!-- Layer Background-->
    <div class="scrolling-wrapper layer-background">
      <vue-scroll ref="vsBackground" :ops="opsParallax3">
        <!-- Boards-->
        <div
          v-for="board in boards"
          :key="board.id"
          :id="'board-background-' + board.id"
          class="board"
          :class="{ even: board.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ board.id }}</h2>
              <p class="board-name">Background</p>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- Layer Content -->
    <div class="scrolling-wrapper layer-content">
      <vue-scroll ref="vsContent" :ops="opsParallax2">
        <!-- Boards-->
        <div
          v-for="board in boards"
          :key="board.id"
          :id="'board-content-' + board.id"
          class="board"
          :class="{ even: board.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ board.id }}</h2>
              <p class="board-name">Content</p>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- Layer Character -->
    <div class="layer-character">
      <div>Character</div>
    </div>

    <div class="scrolling-wrapper layer-foreground">
      <vue-scroll ref="vsForeground" :ops="opsParallax1">
        <!-- Boards-->
        <div
          v-for="board in boards"
          :key="board.id"
          :id="'board-foreground-' + board.id"
          class="board"
          :class="{ even: board.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ board.id }}</h2>
              <p class="board-name">Foreground</p>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- Content DIV.TEMPLATE-->
  </div>
</template>

<script lang="ts">
import {Board} from "@/_models/board"
import { Vue, Component, Prop } from 'vue-property-decorator'
import vuescroll from 'vuescroll'



@Component({ components: { vuescroll } })
class HorizontalScroller extends Vue {

  debug = false

  // Board State
  currentBoardNr = 1
  firstBoardNr = 1
  lastBoardNr = 15

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

  /**
   *  4 Layers:
   *
   *    - Background
   *    - Content
   *    - Character
   *    - Foreground
   *
   *
   **/

  opsParallax1 = {
    vuescroll: {
      mode: 'native',
    },
    scrollBoard: {
      maxHeight: 600,
      scrollingX: true,
      scrollingY: false,
      // maxWidth: 100%,
      easing: 'easeOutQuad',
    },
    rail: {},
    bar: {
      disable: true,
    },
  }

  opsParallax2 = {
    vuescroll: {
      mode: 'native',
    },
    scrollBoard: {
      maxHeight: 600,
      scrollingX: true,
      scrollingY: false,
      // maxWidth: 100%,
      easing: 'easeOutQuad',
    },
    rail: {},
    bar: {
      disable: true,
    },
  }

  opsParallax3 = {
    vuescroll: {
      mode: 'native',
    },
    scrollBoard: {
      maxHeight: 600,
      scrollingX: true,
      scrollingY: false,
      // maxWidth: 100%,
      easing: 'easeOutQuad',
    },
    rail: {},
    bar: {
      disable: true,
    },
  }

  /**
   *
   * @param nr
   */
  scrollToBoard(nr: number) {
    this.$bus.$emit('board', nr)

    this.currentBoardNr = nr
    const elemForeground: string = '#board-foreground-' + nr
    const elemContent: string = '#board-content-' + nr
    const elemBackground: string = '#board-background-' + nr

    const vsForeground = this.$refs['vsForeground'] as vuescroll

    vsForeground.scrollIntoView(elemForeground, 1000)

    const vsContent = this.$refs['vsContent'] as vuescroll
    vsContent.scrollIntoView(elemContent, 1200)

    const vsBackground = this.$refs['vsBackground'] as vuescroll
    vsBackground.scrollIntoView(elemBackground, 1400)

    const pageInfo = vsContent.getCurrentviewDom()
    console.log(pageInfo)

  }

  /**
   *
   */
  scrollToNextBoard() {
    const nr: number = this.currentBoardNr + 1
    if (nr > this.lastBoardNr) {
      console.log('This is the last Board!')
      return false
    }
    this.scrollToBoard(nr)
  }

  /**
   *
   */
  scrollToPreviousBoard() {
    const nr: number = this.currentBoardNr - 1
    if (nr == this.firstBoardNr - 1) {
      console.log('This is the first Board!')
      return false
    }
    this.scrollToBoard(nr)
  }

  /**
   *
   */
  scrollToFirstBoard() {
    console.log('Go to Last Board')

    if (this.currentBoardNr == this.firstBoardNr) {
      console.log('This is the first Board!')
      return false
    }
    this.scrollToBoard(this.firstBoardNr)
  }

  /**
   *
   */
  scrollToLastBoard() {
    console.log('Go to Last Board')

    if (this.currentBoardNr == this.lastBoardNr) {
      console.log('This is the last Board!')
      return false
    }
    this.scrollToBoard(this.lastBoardNr)
  }

  created() {
    const eventId = this.$bus.$on('change_board', (params: any) => {
      console.log('Event "change_board" detected: ', params)

      if (isNaN(params)) {
        switch (params) {
          case 'previous':
            this.scrollToPreviousBoard()
            break

          case 'next':
            this.scrollToNextBoard()
            break

          default:
            break
        }
      } else {
        this.scrollToBoard(params)
      }
    })
  }
}

export default HorizontalScroller
</script>

<style lang="scss">
@import 'HorizontalScroller';
</style>
