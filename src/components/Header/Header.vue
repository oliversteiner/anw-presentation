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

    <!-- Station Navigation -->
    <div class="station-navigation">
      <ul class="toolbar-station-control">
        <!-- previous Board -->
        <li>
          <div class="station-control-item" v-on:click="previousBoard()">
            <el-tooltip :content="$t('Last Board')" placement="bottom">
              <div>
                <font-awesome-icon :icon="['fal', 'long-arrow-left']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
          </div>
        </li>

        <!-- next Board -->
        <li>
          <div class="station-control-item" v-on:click="nextBoard()">
            <el-tooltip :content="$t('Next Board')" placement="bottom">
              <div>
                <font-awesome-icon :icon="['fal', 'long-arrow-right']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import PanelControl, {PanelControlOptions} from '@/components/PanelControl/PanelControl'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: { PanelControl } })
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

  // Boards
  nextBoard() {
    this.$bus.$emit('change_board', 'next')
  }

  previousBoard() {
    this.$bus.$emit('change_board', 'previous')
  }
}

export default Header
</script>

<style lang="scss">
@import 'Header';
</style>
