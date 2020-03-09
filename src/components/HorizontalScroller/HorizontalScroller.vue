<template>
  <div class="horizontal-scroller">


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
import { Board } from '@/_models/board'
import { BoardsStore } from '@/store'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import vuescroll from 'vuescroll'

@Component({ components: { vuescroll } })
class HorizontalScroller extends Vue {
  debug = false

  /**
   *  TODO: load board content from Store
   *  @return Board[]
   * **/
  get boards(): Board[] {
    return BoardsStore.list
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

  created() {
    this.$store.subscribe((mutation) => {
      // console.log(mutation)
      if (mutation.type === 'boards/goTo' && mutation.payload) {
        this.scrollToBoard(mutation.payload)
      }
    })
  }
}

export default HorizontalScroller
</script>

<style lang="scss">
@import 'HorizontalScroller';
</style>
