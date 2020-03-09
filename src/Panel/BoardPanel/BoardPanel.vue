<template>
  <div class="board-panel">
    <div v-if="showPanel" class="board-panel-wrapper">
      <Panel :options="panelOptions">
        <BoardList></BoardList>
      </Panel>
    </div>
  </div>
</template>

<script lang="ts">
import Panel, { PanelOptions } from '@/components/Panel/Panel.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

import BoardList from '@/components/BoardList/BoardList'

@Component({ components: { Panel, BoardList } })
class BoardPanel extends Vue {
  // Panel Toggle
  showPanel = false

  panelOptions: PanelOptions = {
    icon: {
      prefix: 'fas',
      name: 'list',
    },
    name: 'boards',
    title: 'Boards',
  }

  togglePanel() {
    this.showPanel = !this.showPanel
  }

  created() {
    let eventId = null

    // Panel
    eventId = this.$bus.$on('toggle_panel', (params: any) => {
      if (params === 'boards') {
        this.togglePanel()
      }
    })
  }
}

export default BoardPanel
</script>

<style lang="scss">
@import 'BoardPanel';
</style>
