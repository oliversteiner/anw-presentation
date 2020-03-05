<template>
  <div class="remote-view">
    <h1>Remote</h1>

    <!-- Board List-->
    <div class="board-list well">
      <h2 class="well-title" :class="{ show: showTitle }">Boardlist</h2>
      <button class="remote-btn" v-on:click="toggleBoardList">
        <font-awesome-icon v-if="!showBoardList" :icon="['fas', 'chevron-down']"></font-awesome-icon>
        <font-awesome-icon v-if="showBoardList" :icon="['fas', 'chevron-up']"></font-awesome-icon>
      </button>
      <div v-if="showBoardList">
        <BoardList></BoardList>
      </div>
    </div>

    <!-- Timer -->
    <div class="timer ">
      <h2 class="well-title" :class="{ show: showTitle }">Timer</h2>
      <Timer></Timer>
    </div>

    <!-- Panel Control -->
    <div class="panel-control well">
      <h2 class="well-title" :class="{ show: showTitle }">Panel Control</h2>
      <PanelControl :options="panelControlOptions"></PanelControl>

    </div>

    <!-- Send Message -->
    <div class="send-message well">
      <h2 class="send-message" :class="{ show: showTitle }">Send Message</h2>
      <SendMessage></SendMessage>
    </div>

    <!-- Character Control -->
    <div class="character-control well">
      <h2 class="well-title" :class="{ show: showTitle }">Character Control</h2>
      <CharacterControl></CharacterControl>
    </div>

    <!-- Board Control-->
    <div class="board-control well">
      <h2 class="well-title" :class="{ show: showTitle }">Board Control</h2>
      <BoardControl :current="true" :names="true"></BoardControl>
    </div>

    <!-- Board Notes -->
    <div class="board-notes well">
      <h2 class="well-title" :class="{ show: showTitle }">Board Notes</h2>
    <BoardNotes></BoardNotes>
    </div>
  </div>
</template>

<script lang="ts">
import BoardControl from "@/components/BoardControl/BoardControl.vue"
import BoardList from '@/components/BoardList/BoardList.vue'
import BoardNotes from "@/components/BoardNotes/BoardNotes.vue"
import CharacterControl from '@/components/CharacterControl/CharacterControl.vue'
import PanelControl, {PanelControlOptions} from "@/components/PanelControl/PanelControl.vue"
import Timer from '@/components/Timer/Timer.vue'
import SendMessage from '@/components/SendMessage/SendMessage.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: { BoardList, Timer, SendMessage,PanelControl, CharacterControl, BoardControl, BoardNotes } })
export default class RemoteView extends Vue {
  showTitle = true
  showBoardList = false

  // Board List
  toggleBoardList() {
    this.showBoardList = !this.showBoardList
  }

  // Panel Control
  private panelControlOptions: PanelControlOptions = {
    icon: true,
    tooltip: false,
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
}
</script>

<style lang="scss">
@import 'RemoteView';
</style>
