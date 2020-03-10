<template>
  <div class="board-notes">
    <!-- Content -->
    <h3 class="title">{{board.id}} - {{board.title}}</h3>
    <div class="notes">
      {{ board.notes }}
    </div>
  </div>
</template>

<script lang="ts">
import {BoardsStore} from "@/store"
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
class BoardNotes extends Vue {



  get board() {
    return BoardsStore.currentBoard()
  }

  async created() {
  }
}

export default BoardNotes
</script>

<style lang="scss">
@import 'BoardNotes';
</style>
