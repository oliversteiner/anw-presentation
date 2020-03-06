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
import { Board } from '@/_models/board'
import { Component, Vue } from 'vue-property-decorator'

@Component({ components: {} })
class BoardNotes extends Vue {
  currentBoardId = 1

  get boards(): Board[] {
    // Board Seed
    const boardsArr: Board[] = [
      {
        id: 1,
        notes:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, ' +
          'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
      },
      {
        id: 2,
        notes:
          ' et ea rebum. Stet clita kasd gubergren, no sea takimata . ' +
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temp',
      },
      {
        id: 3,
        notes: 'invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo',
      },
      {
        id: 4,
        notes: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor  duo dolores',
      },
      { id: 5, notes: 'sanctus est Lorem ipsum dolor sit amet' },
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

  get board() {
    return this.boards.find(item => {
      return item.id == this.currentBoardId
    })
  }

  created() {
    // Slides
    const eventId = this.$bus.$on('board', (id: number) => {
      console.log('board', id)

      this.currentBoardId = id
    })
  }
}

export default BoardNotes
</script>

<style lang="scss">
@import 'BoardNotes';
</style>
