<template>
  <div class="console-panel">
    <div v-if="showPanel" class="panel-wrapper">
      <Panel :options="panelOptions">
        <Console></Console>
      </Panel>
    </div></div
></template>

<script lang="ts">
import Panel, { PanelOptions } from '@/components/Panel/Panel'
import { PanelStore } from '@/store'
import { Vue, Component, Prop } from 'vue-property-decorator'
import Console from '@/components/Console/Console.vue'

@Component({ components: { Panel, Console } })
class ConsolePanel extends Vue {
  // Content

  panelOptions: PanelOptions = {
    icon: {
      prefix: 'fas',
      name: 'terminal',
    },
    name: 'console',
    title: 'console',
  }

  get showPanel() {
    return PanelStore.console
  }
}

export default ConsolePanel
</script>

<style lang="scss">
@import 'ConsolePanel';
</style>
