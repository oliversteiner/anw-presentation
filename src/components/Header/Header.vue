<template>
  <div class="header">
    <!-- Title-->
    <div class="title">A Nicer Way</div>

    <!-- Toolbar -->
    <div class="toolbar-container">
      <div class="toolbar-wrapper">
        <transition name="fade">
          <div v-if="show">
            <PanelControl :options="panelControlOptions"></PanelControl>
          </div>
        </transition>

        <!-- Button Show Toolbar -->
        <div class="container-toggle-button" v-on:click="show = !show">
          <font-awesome-icon v-if="show" :icon="['fas', 'caret-up']" size="lg"></font-awesome-icon>
          <font-awesome-icon v-if="!show" :icon="['fas', 'caret-down']" size="lg"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="board-nav">
      <BoardControl :tooltip="true" :show-current="false" :show-board-names="false"></BoardControl>
    </div>
  </div>
</template>

<script lang="ts">
import BoardControl from '@/components/BoardControl/BoardControl.vue'
import PanelControl, { PanelControlOptions } from '@/components/PanelControl/PanelControl'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: { PanelControl, BoardControl } })
class Header extends Vue {
  show = true

  panelControlOptions: PanelControlOptions = {
    icon: true,
    tooltip: true,
    label: false,
    components: {
      boardsList: true,
      editBoard: true,
      phoneSimulator: true,
      console: true,
      remote: true,
      help: true,
      character: true,
      editor: true,
    },
  }
}

export default Header
</script>

<style lang="scss">
@import 'Header';
</style>
