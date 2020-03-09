<template>
  <div class="board-edit-panel">
    <div v-if="showPanel" class="panel-wrapper">
      <Panel :options="panelOptions">
        <EditBoard></EditBoard>
      </Panel>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore - no proper declaration for vue-moveable

import EditBoard from '@/components/EditBoard/EditBoard.vue'
import Panel, { PanelOptions } from '@/components/Panel/Panel.vue'
import { PanelStore } from '@/store'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({ components: { Panel, EditBoard } })
class EditBoardPanel extends Vue {

  panelOptions: PanelOptions = {
    icon: {
      prefix: 'far',
      name: 'file-edit',
    },
    name: 'edit_board',
    title: 'Edit Board',
  }

  // Panel Toggle

  get showPanel() {
    return PanelStore.editBoard
  }

  togglePanel() {
    PanelStore.togglePanel('edit_board')
  }

  mounted() {
  }

  created() {

  }
}

export default EditBoardPanel
</script>

<style lang="scss">
@import 'EditBoardPanel';
</style>
