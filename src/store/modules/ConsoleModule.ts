import { Action, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators'
import store from '@/store'

// ConsoleModule
// ---------------------------------------------- //

export interface Message {
  id?: number
  text: string
  value: any
  status: string
  tag: string
}

interface ConsoleModuleInterface {
  logs: Message[]
}

@Module({
  namespaced: true,
  name: 'console',
  store,
})
export default class ConsoleModule extends VuexModule implements ConsoleModuleInterface {
  logs: Message[] = []

  @Mutation
  clear() {
    this.logs = []
  }

  @Mutation
  addMessage(message: Message) {
    const _message: Message = message
    _message.id = this.logs.length +1

    this.logs.push(_message)
  }

  nextID() {
    return this.logs.length +1
  }

  created(){
    this.logs = []
  }
}
