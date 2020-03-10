<template>
  <div class="edit-board">
    <h2>EditBoard</h2>
    <!-- Content -->
    {{ board.title }}
  </div>
</template>

<script lang="ts">
import { BoardsStore } from '@/store'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class EditBoard extends Vue {
  // Content

  get board() {
   // return BoardsStore.currentBoard()
    return {}
  }

  async created() {
  }
}

export default EditBoard
</script>

<style lang="scss">
@import 'EditBoard';
</style>
