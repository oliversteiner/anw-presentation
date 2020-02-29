<template>
  <div class="home">
    <Header></Header>

    <HelloWorld msg="Welcome to Your Vue.js App" ></HelloWorld>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
export default {
  name: 'home',
  components: {
    HelloWorld, Footer, Header
  },
}
</script>
