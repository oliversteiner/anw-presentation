import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store, { ConsoleStore } from '@/store'

// PanelModule
// ---------------------------------------------- //

interface PanelModuleInterface {
  boards: boolean
  editBoard: boolean
  simulator: boolean
  console: boolean
  remote: boolean
  help: boolean
  character: boolean
  messages: boolean
  editor: boolean
  error: string
}

@Module({
  namespaced: true,
  name: 'panel',
  store,
})
export default class PanelModule extends VuexModule implements PanelModuleInterface {
  boards = false
  editBoard = false
  simulator = false
  console = false
  remote = false
  help = false
  character = false
  messages = false
  editor = false
  error = ''

  @Mutation
  togglePanel(name: string) {
    this.error = ''
    switch (name) {
      case 'boards':
        this.boards = !this.boards
        break
      case 'edit_board':
        this.editBoard = !this.editBoard
        break
      case 'simulator':
        this.simulator = !this.simulator
        break
      case 'console':
        this.console = !this.console
        break
      case 'remote':
        this.remote = !this.remote
        break
      case 'help':
        this.help = !this.help
        break
      case 'character':
        this.character = !this.character
        break
      case 'messages':
        this.messages = !this.messages
        break
      case 'editor':
        this.editor = !this.editor
        break
      default:
        this.error = ' Panel not found: '
        break
    }

    // Logging Changes
    const message = {
      text: 'toggle panel',
      value: name,
      status: 'default',
      tag: 'panel',
    }
    if (this.error) {
      console.warn(this.error, name)
      message.text = this.error
      message.status = 'error'
    }

    ConsoleStore.addMessage(message)
  }

  @Mutation
  closePanel(name: string) {
    switch (name) {
      case 'boards':
        this.boards = false
        break
      case 'edit_board':
        this.editBoard = false
        break
      case 'simulator':
        this.simulator = false
        break
      case 'console':
        this.console = false
        break
      case 'remote':
        this.remote = false
        break
      case 'help':
        this.help = false
        break
      case 'character':
        this.character = false
        break
      case 'messages':
        this.messages = false
        break
      case 'editor':
        this.editor = false
        break
      default:
        console.warn('No Panel not found:', name)
        break
    }

    // Logging Changes
    const message = {
      text: 'close panel',
      value: name,
      status: 'default',
      tag: 'panel',
    }
    ConsoleStore.addMessage(message)
  }
}
