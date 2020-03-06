<template>
  <div class="panel-control nicer-toolbar">
    <ul class="nav-horizontal nav-btn-group" :class="{ 'icon-only': iconOnly }">
      <!-- Board List-->
      <li class="nav-item nav-btn " v-if="opt.components.boardsList">
        <div v-on:click="toggleBoards()">
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
      <li class="nav-item nav-btn " v-if="opt.components.editBoard">
        <div v-on:click="toggleEditBoard()">
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
      <li class="nav-item nav-btn " v-if="opt.components.phoneSimulator">
        <div v-on:click="toggleSimulator()">
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
      <li class="nav-item nav-btn " v-if="opt.components.console">
        <div v-on:click="toggleConsole()">
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
      <li class="nav-item nav-btn " v-if="opt.components.remote">
        <div v-on:click="toggleRemote()">
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
      <li class="nav-item nav-btn " v-if="opt.components.help">
        <div v-on:click="toggleHelp()">
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
      <li class="nav-item nav-btn " v-if="opt.components.character">
        <div v-on:click="toggleCharacter()">
          <el-tooltip :content="$t('Character')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'chess-knight']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Character') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Messages -->
      <li class="nav-item nav-btn " v-if="opt.components.messages">
        <div v-on:click="toggleMessages()">
          <el-tooltip :content="$t('Messages')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'comment-lines']"></font-awesome-icon>
              </div>
              <div class="label" v-if="opt.label">
                {{ $t('Messages') }}
              </div>
            </div>
          </el-tooltip>
        </div>
      </li>

      <!-- Editor -->
      <li class="nav-item nav-btn" v-if="opt.components.editor">
        <div v-on:click="toggleEditor()">
          <el-tooltip :content="$t('Editor')" placement="bottom" :disabled="!opt.tooltip">
            <div class="icon-label">
              <div class="icon" v-if="opt.icon">
                <font-awesome-icon :icon="['fas', 'pen-square']"></font-awesome-icon>
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
    messages: boolean
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
      messages: true,
      editor: true,
    },
  }

  // Toggle Panels
  // Boards
  toggleBoards() {
    this.$bus.$emit('toggle_panel', 'boards')
  }

  // Edit Board
  toggleEditBoard() {
    this.$bus.$emit('toggle_panel', 'edit_board')
  }

  // Simulator
  toggleSimulator() {
    this.$bus.$emit('toggle_panel', 'simulator')
  }

  // Console
  toggleConsole() {
    this.$bus.$emit('toggle_panel', 'console')
  }

  // Remote
  toggleRemote() {
    this.$bus.$emit('toggle_panel', 'remote')
  }

  // Help
  toggleHelp() {
    this.$bus.$emit('toggle_panel', 'help')
  }

  // Character
  toggleCharacter() {
    this.$bus.$emit('toggle_panel', 'character')
  }

  // Messages
  toggleMessages() {
    this.$bus.$emit('toggle_panel', 'messages')
  }

  // Editor
  toggleBEditor() {
    this.$bus.$emit('toggle_panel', 'editor')
  }

  // Nav Bar
  iconOnly() {
    if (this.opt?.icon && !this.opt.label) {
      return true
    }
  }

  @Watch('options')
  func() {
    if (this.options) this.opt = this.options
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
