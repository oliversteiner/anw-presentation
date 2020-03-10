<template>
  <div class="board-list nicer-list">
    <ul class="list">
      <li
        v-for="item in boards"
        class="list-item"
        :key="item.id"
        :class="{ active: currentBoardId === item.id }"
        @click="changeBoard(item.id)"
      >
        <span class="list-item-id">{{ item.id }}</span>
        <span class="list-item-title">{{ item.title }}</span>
        <span class="list-item-text">{{ item.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Board } from '@/_models/board'
import { BoardsStore } from '@/store'
import {Component, Vue, Watch} from 'vue-property-decorator'

@Component({ components: {} })
class BoardList extends Vue {
  // Board State
  get currentBoardId() {
    return BoardsStore.currentBoardId
  }

  /**
   *  TODO: load board content from Store
   *  @return Board[]
   * **/
  get boards(): Board[] {
    return BoardsStore.list
  }

  // Boards
  changeBoard(id: number) {
    BoardsStore.goTo(id)
  }



  async created() {
  }
}
export default BoardList
</script>

<style lang="scss">
@import 'BoardList';
</style>
