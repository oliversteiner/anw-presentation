<template>
  <div class="home">
    <Header></Header>

    <HorizontalScroller></HorizontalScroller>

    <Footer></Footer>
    <Console></Console>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import HorizontalScroller from '@/components/HorizontalScroller/HorizontalScroller.vue'
import Console from '@/components/Console/Console'

export default {
  name: 'home',
  components: {
    Footer,
    Header,
    HorizontalScroller,
    Console,
  },
}
</script>
