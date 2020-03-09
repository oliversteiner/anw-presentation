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
import {PanelStore} from "@/store"
import { Vue, Component, Prop } from 'vue-property-decorator'

import BoardList from '@/components/BoardList/BoardList'

@Component({ components: { Panel, BoardList } })
class BoardPanel extends Vue {
  // Panel Toggle

  panelOptions: PanelOptions = {
    icon: {
      prefix: 'fas',
      name: 'list',
    },
    name: 'boards',
    title: 'Boards',
  }

  get showPanel() {
    return PanelStore.boards
  }

  togglePanel() {
    PanelStore.togglePanel('boards')
  }

  created() {
  }
}

export default BoardPanel
</script>

<style lang="scss">
@import 'BoardPanel';
</style>
