<template>
  <div class="horizontal-scroller">
    <!-- control-panel -->
    <div class="control-panel">
      <div class="panel-group">
        Panel: <span> {{ currentPanelNr }}</span>
      </div>
      <div class="panel-group">
        <button v-on:click="scrollToFirstPanel()">First</button>
        <button v-on:click="scrollToPrevPanel()">Prev</button>
        <button v-on:click="scrollToNextPanel()">Next</button>
        <button v-on:click="scrollToLastPanel()">Last</button>
      </div>

      <div class="panel-group">
        <button v-on:click="scrollToPanel(2)">2</button>
        <button v-on:click="scrollToPanel(9)">9</button>
      </div>
    </div>

    <!-- Layer Background-->
    <div class="scrolling-wrapper layer-background">
      <vue-scroll ref="vsBackground" :ops="opsParallax3">
        <!-- Panels-->
        <div
          v-for="panel in panels"
          :key="panel.id"
          :id="'panel-background-' + panel.id"
          class="card"
          :class="{ even: panel.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ panel.id }}</h2>
              <p class="panel-name">Background</p>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- Layer Content -->
    <div class="scrolling-wrapper layer-content">
      <vue-scroll ref="vsContent" :ops="opsParallax2">
        <!-- Panels-->
        <div
          v-for="panel in panels"
          :key="panel.id"
          :id="'panel-content-' + panel.id"
          class="card"
          :class="{ even: panel.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ panel.id }}</h2>
              <p class="panel-name">Content</p>
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
        <!-- Panels-->
        <div
          v-for="panel in panels"
          :key="panel.id"
          :id="'panel-foreground-' + panel.id"
          class="card"
          :class="{ even: panel.id % 2 == 1 }"
        >
          <div class="center-middle">
            <div class="center-text">
              <h2>{{ panel.id }}</h2>
              <p class="panel-name">Foreground</p>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>

    <!-- Content DIV.TEMPLATE-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import vuescroll from 'vuescroll'

@Component({ components: { vuescroll } })
class HorizontalScroller extends Vue {
  // Panel Seed

  panelsArr = [
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

  get panels() {
    return this.panelsArr
  }

  // Panel Status
  currentPanelNr: number = 1
  firstPanelNr: number = 1
  lastPanelNr: number = 15

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
    scrollPanel: {
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
    scrollPanel: {
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
    scrollPanel: {
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
  scrollToPanel(nr: number) {
    this.currentPanelNr = nr
    const elemForeground: string = '#panel-foreground-' + nr
    const elemContent: string = '#panel-content-' + nr
    const elemBackground: string = '#panel-background-' + nr

    const vsForeground = this.$refs['vsForeground'] as vuescroll
    vsForeground.scrollIntoView(elemForeground, 2400)

    const vsContent = this.$refs['vsContent'] as vuescroll
    vsContent.scrollIntoView(elemContent, 2200)

    const vsBackground = this.$refs['vsBackground'] as vuescroll
    vsBackground.scrollIntoView(elemBackground, 2000)

    const pageInfo = vsContent.getCurrentviewDom()
    console.log(pageInfo)
  }

  /**
   *
   */
  scrollToNextPanel() {
    const nr: number = this.currentPanelNr + 1
    if (nr > this.lastPanelNr) {
      console.log('This is the last Panel!')
      return false
    }
    this.scrollToPanel(nr)
  }

  /**
   *
   */
  scrollToPrevPanel() {
    const nr: number = this.currentPanelNr - 1
    if (nr == this.firstPanelNr - 1) {
      console.log('This is the first Panel!')
      return false
    }
    this.scrollToPanel(nr)
  }

  /**
   *
   */
  scrollToFirstPanel() {
    console.log('Go to Last Panel')

    if (this.currentPanelNr == this.firstPanelNr) {
      console.log('This is the first Panel!')
      return false
    }
    this.scrollToPanel(this.firstPanelNr)
  }

  /**
   *
   */
  scrollToLastPanel() {
    console.log('Go to Last Panel')

    if (this.currentPanelNr == this.lastPanelNr) {
      console.log('This is the last Panel!')
      return false
    }
    this.scrollToPanel(this.lastPanelNr)
  }

  created() {}

  mount() {}
}

export default HorizontalScroller
</script>

<style lang="scss">
@import 'HorizontalScroller';
</style>
