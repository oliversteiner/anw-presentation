<template>
  <div class="panel-control">
    <ul class="nav" :class="{ 'icon-only': iconOnly }">
      <!-- Board List-->
      <li class="nav-item" v-if="opt.components.boardsList">
        <div class="toolbar-btn" v-on:click="toggleBoards()">
          <el-tooltip :content="$t('Boards')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Board List') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Edit Board -->
      <li class="nav-item" v-if="opt.components.editBoard">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Edit Board')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['far', 'file-edit']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Edit Board') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Simulator -->
      <li class="nav-item" v-if="opt.components.phoneSimulator">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Phone Simulator')" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['far', 'mobile']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Phone Sim') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Console -->
      <li class="nav-item" v-if="opt.components.console">
        <div class="toolbar-btn" v-on:click="toggleConsole()">
          <el-tooltip :content="$t('Console')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'terminal']"></font-awesome-icon>
              </div>

              <div class="label" v-if="opt.label">
                {{ $t('Console') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Remote -->
      <li class="nav-item" v-if="opt.components.remote">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Remote')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'calculator']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Remote') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Help -->
      <li class="nav-item" v-if="opt.components.help">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Help')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'question-circle']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Help') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Character -->
      <li class="nav-item" v-if="opt.components.character">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Character')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'chess-knight']" flip="horizontal"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Character') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Editor -->
      <li class="nav-item" v-if="opt.components.editor">
        <div class="toolbar-btn">
          <el-tooltip :content="$t('Editor')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'pen-square']" flip="horizontal"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Editor') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

export interface PanelControlOptions {
  icon: boolean
  tooltip: boolean
  label: boolean
  components: {
    boardsList: boolean
    editBoard: boolean
    phoneSimulator: boolean
    console: boolean
    remote: boolean
    help: boolean
    character: boolean
    editor: boolean
  }
}

@Component({ components: {} })
class PanelControl extends Vue {
  @Prop() options: PanelControlOptions | undefined

  private opt: PanelControlOptions = {
    icon: true,
    tooltip: true,
    label: true,
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

  // Toggle Panels
  // Boards
  toggleBoards() {
    this.$bus.$emit('toggle_panel', 'boards')
  }

  // Console
  toggleConsole() {
    this.$bus.$emit('toggle_panel', 'console')
  }

  // Nav Bar
  iconOnly() {
    if (this.opt?.icon && !this.opt.label) {
      return true
    }
  }

  @Watch('options')
  func()
  {
    if(this.options)
    this.opt = this.options
  }

  created() {
    console.log('Options', this.opt)
    if (this.options) {
      this.opt = this.options
    }
  }
}

export default PanelControl
</script>

<style lang="scss">
@import 'PanelControl';
</style>
