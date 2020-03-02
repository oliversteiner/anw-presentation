<template>
  <div class="home">
    <Header></Header>

    <HorizontalScroller></HorizontalScroller>

    <Footer></Footer>
    <Console></Console>
    <BoardPanel></BoardPanel>

  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import HorizontalScroller from '@/components/HorizontalScroller/HorizontalScroller.vue'
import Console from '@/components/Console/Console'
import BoardPanel from '@/components/BoardPanel/BoardPanel'

export default {
  name: 'home',
  components: {
    Footer,
    Header,
    HorizontalScroller,
    Console,
    BoardPanel,
  },
}
</script>
