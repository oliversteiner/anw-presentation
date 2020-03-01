<template>
  <div class="home">
    <Header></Header>

    <HorizontalScroller></HorizontalScroller>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import HorizontalScroller from '@/components/HorizontalScroller/HorizontalScroller.vue'


export default {
  name: 'home',
  components: {
    HelloWorld, Footer, Header, HorizontalScroller
  },
}
</script>
