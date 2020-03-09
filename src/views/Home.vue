<template>
  <div class="home">
    <Header></Header>
<!--
    <RemoteView></RemoteView>
-->

    <HorizontalScroller></HorizontalScroller>

    <Footer></Footer>
    <Console></Console>
    <BoardPanel></BoardPanel>
    <EditBoardPanel></EditBoardPanel>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import HorizontalScroller from '@/components/HorizontalScroller/HorizontalScroller.vue'
import Console from '@/components/Console/Console'
import Panel from '@/components/Panel/Panel'
import BoardPanel from '@/Panel/BoardPanel/BoardPanel'
import EditBoardPanel from '@/Panel/EditBoardPanel/EditBoardPanel'
import RemoteView from '@/views/RemoteView/RemoteView'
export default {
  name: 'home',
  components: {
    Footer,
    Header,
    HorizontalScroller,
    Console,
    BoardPanel,
    RemoteView,
    EditBoardPanel,
  },
}
</script>
