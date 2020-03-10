<template>
  <div class="simulator-panel">
    <div v-if="showPanel" class="panel-wrapper">
      <Panel :options="panelOptions" :move="movable" :modal="showModal">
        <div v-if="minimized"  class="min" @mousedown="movePanel()" @mouseup="restPanel()" @dblclick="toggleContent()">
          <div>
            <font-awesome-icon :icon="['far', 'mobile']"></font-awesome-icon>
          </div>
        </div>
        <Simulator v-if="!minimized" @movePanel="movePanel()" @restPanel="restPanel()" @toggleContent="toggleContent()" @modal="toggleModal()"></Simulator>
      </Panel>
    </div>
    <!-- Content -->
  </div>
</template>

<script lang="ts">
import Panel, { PanelOptions } from '@/components/Panel/Panel.vue'
import Simulator from '@/components/Simulator/Simulator.vue'
import { PanelStore } from '@/store'
import { Vue, Component, Prop } from 'vue-property-decorator'
// @ts-ignore - no proper declaration for vue-moveable
import Moveable from 'vue-moveable'

@Component({ components: { Panel, Simulator } })
class SimulatorPanel extends Vue {
  // Content

  minimized = false
  panelOptions: PanelOptions = {
    icon: {
      prefix: 'far',
      name: 'mobile',
    },
    name: 'simulator',
    title: 'Mobile Simulator',
    toolbar: false,
  }

  // Panel Move
  movable: Moveable = {
    draggable: true,
    throttleDrag: 0,
    resizable: false,
    throttleResize: 1,
    keepRatio: false,
    scalable: false,
    throttleScale: 0,
    rotatable: false,
    throttleRotate: 0,
    pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
    origin: false,
    className: 'movable-panel',
  }

  showModal = false

  get showPanel() {
    return PanelStore.simulator
  }

  togglePanel() {
    PanelStore.togglePanel('simulator')
  }

  movePanel() {
    this.movable.draggable = true
  }
  restPanel() {
    this.movable.draggable = false
  }
  toggleContent() {
    this.minimized = !this.minimized
  }

  toggleModal() {
    this.showModal = !this.showModal
    console.log('Simulator-Panel > toggleModal',this.showModal );
  }
  created() {
    this.$bus.$on('modal', (param: boolean) => {

      this.showModal = param
    })
  }
}

export default SimulatorPanel
</script>

<style lang="scss">
@import 'SimulatorPanel';
</style>
