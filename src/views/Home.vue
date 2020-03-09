<template>
  <div class="home">
    <Header></Header>
<!--
    <RemoteView></RemoteView>
-->

    <HorizontalScroller></HorizontalScroller>

    <Footer></Footer>
    <ConsolePanel></ConsolePanel>
    <BoardPanel></BoardPanel>
    <EditBoardPanel></EditBoardPanel>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'
import HorizontalScroller from '@/components/HorizontalScroller/HorizontalScroller.vue'
import ConsolePanel from '@/Panel/ConsolePanel/ConsolePanel'
import BoardPanel from '@/Panel/BoardPanel/BoardPanel'
import EditBoardPanel from '@/Panel/EditBoardPanel/EditBoardPanel'
import RemoteView from '@/views/RemoteView/RemoteView'
export default {
  name: 'home',
  components: {
    Footer,
    Header,
    HorizontalScroller,
    ConsolePanel,
    BoardPanel,
    RemoteView,
    EditBoardPanel,
  },
}
</script>
