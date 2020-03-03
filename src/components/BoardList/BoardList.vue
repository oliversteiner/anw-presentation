<template>
  <div class="board-list nicer-list">
    <ul class="list">
      <li
        v-for="item in boards"
        class="list-item"
        :key="item.id"
        :class="{ active: currentBoardNr === item.id }"
        v-on:click="changeBoard(item.id)"
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
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
class BoardList extends Vue {
  // Board State
  currentBoardNr = 1

  /**
   *  TODO: load board content from Store
   *  @return Board[]
   * **/
  get boards(): Board[] {
    // Board Seed
    const boardsArr: Board[] = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
    ]

    return boardsArr
  }

  // Boards
  changeBoard(id: number) {
    this.$bus.$emit('change_board', id)
  }

  created() {
    let eventId = null

    // Slides
    eventId = this.$bus.$on('board', (id: number) => {
      console.log('board', id)

      this.currentBoardNr = id
    })
  }
}
export default BoardList
</script>

<style lang="scss">
@import 'BoardList';
</style>
