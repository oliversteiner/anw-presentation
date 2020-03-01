<template>
  <div class="horizontal-scroller">
    <!-- control-panel -->
    <div class="control-panel">
      <div>
        <h3>
          Panel: <span> {{ currentPanelNr }}</span>
        </h3>
      </div>
      <div>
        <h4>Nachbar</h4>
        <button v-on:click="scrollToFirstPanel()">First</button>
        <button v-on:click="scrollToPrevPanel()">Prev</button>
        <button v-on:click="scrollToNextPanel()">Next</button>
        <button v-on:click="scrollToLastPanel()">Last</button>
      </div>

      <div>
        <h4>Direkt</h4>
        <button v-on:click="scrollToPanel(2)">2</button>
        <button v-on:click="scrollToPanel(9)">9</button>
      </div>
      <div>
        <h3>Other</h3>
      </div>
    </div>

    <div>
      <div class="scrolling-wrapper parallax2">
        <vue-scroll ref="vs2" :ops="opsParalax">
          <div id="Tpanel1" class="card odd"><h2>1</h2></div>
          <div id="Tpanel2" class="card even"><h2>2</h2></div>
          <div id="Tpanel3" class="card odd"><h2>3</h2></div>
          <div id="Tpanel4" class="card even"><h2>4</h2></div>
          <div id="Tpanel5" class="card odd"><h2>5</h2></div>
          <div id="Tpanel6" class="card even"><h2>6</h2></div>
          <div id="Tpanel7" class="card odd"><h2>7</h2></div>
          <div id="Tpanel8" class="card even"><h2>8</h2></div>
          <div id="Tpanel9" class="card odd"><h2>9</h2></div>
          <div id="Tpanel10" class="card odd"><h2>10</h2></div>
          <div id="Tpanel11" class="card even"><h2>11</h2></div>
          <div id="Tpanel12" class="card odd"><h2>12</h2></div>
          <div id="Tpanel13" class="card even"><h2>13</h2></div>
          <div id="Tpanel14" class="card odd"><h2>14</h2></div>
          <div id="Tpanel15" class="card even"><h2>15</h2></div>
        </vue-scroll>
      </div>

      <div class="scrolling-wrapper parallax1">
        <vue-scroll ref="vs" :ops="ops">
          <div id="panel1" class="card odd"><h2>1</h2></div>
          <div id="panel2" class="card even"><h2>2</h2></div>
          <div id="panel3" class="card odd"><h2>3</h2></div>
          <div id="panel4" class="card even"><h2>4</h2></div>
          <div id="panel5" class="card odd"><h2>5</h2></div>
          <div id="panel6" class="card even"><h2>6</h2></div>
          <div id="panel7" class="card odd"><h2>7</h2></div>
          <div id="panel8" class="card even"><h2>8</h2></div>
          <div id="panel9" class="card odd"><h2>9</h2></div>
          <div id="panel10" class="card odd"><h2>10</h2></div>
          <div id="panel11" class="card even"><h2>11</h2></div>
          <div id="panel12" class="card odd"><h2>12</h2></div>
          <div id="panel13" class="card even"><h2>13</h2></div>
          <div id="panel14" class="card odd"><h2>14</h2></div>
          <div id="panel15" class="card even"><h2>15</h2></div>
        </vue-scroll>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import vuescroll from 'vuescroll'

@Component({ components: { vuescroll } })
class HorizontalScroller extends Vue {
  currentPanelNr: number = 1
  firstPanelNr: number = 1
  lastPanelNr: number = 15

  ops = {
    vuescroll: {
      mode:'native'
    },
    scrollPanel: {
      maxHeight: 350,
      scrollingX:true,
      scrollingY:false,
     // maxWidth: 100%,
      easing: 'easeOutQuad'

    },
    rail: {},
    bar: {
      disable:true

    },
  }

  opsParalax = {
    vuescroll: {
      mode:'native'
    },
    scrollPanel: {
      maxHeight: 350,
      scrollingX:true,
      scrollingY:false,
      // maxWidth: 100%,
      easing: 'easeOutQuad'
    },
    rail: {},
    bar: {
      disable:true
    },
  }

  /**
   *
   * @param nr
   */
  scrollToPanel(nr: number) {
    this.currentPanelNr = nr
    const elem: string = '#panel' + nr
    const elemP: string = '#Tpanel' + nr

    const vs = this.$refs['vs'] as vuescroll
    vs.scrollIntoView(elem, 800)

    const vs2 = this.$refs['vs2'] as vuescroll
    vs2.scrollIntoView(elemP, 1200)


    const pageInfo = vs.getCurrentviewDom()
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
