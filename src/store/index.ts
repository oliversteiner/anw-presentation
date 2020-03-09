import PanelModule from "@/store/modules/PanelModule"
import Vue from 'vue'
import Vuex, { Payload } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { getModule } from 'vuex-module-decorators'
import SettingsModule from '@/store/modules/SettingsModule'

Vue.use(Vuex)

interface SettingsState {
  language: string
}

interface PanelState {
  boards: boolean
  editBoard: boolean
  simulator: boolean
  console: boolean
  remote: boolean
  help: boolean
  character: boolean
  messages: boolean
  editor: boolean
}

export interface State {
  settings: SettingsState
  panel: PanelState
}

const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage,

  // Function that passes the state and returns the state with only the objects you want to store.
  //  reducer: state => ({
  //  keepThisModule: state.keepThisModule,
  //  keepThisModuleToo: state.keepThisModuleToo,
  // getRidOfThisModule: state.getRidOfThisModule
  // }),
})

const store = new Vuex.Store<State>({
  modules: {
    settings: SettingsModule,
    panel: PanelModule,

  },
  plugins: [vuexLocal.plugin],
})

export default store
export const SettingsStore = getModule(SettingsModule, store)
export const PanelStore = getModule(PanelModule, store)

