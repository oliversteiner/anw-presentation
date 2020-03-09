import { Board } from '@/_models/board'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store, { ConsoleStore } from '@/store'

// BoardsModule
// ---------------------------------------------- //

interface BoardsModuleInterface {
  boards: Board[]
  currentBoardId: number
}

@Module({
  namespaced: true,
  name: 'boards',
  store,
})
export default class BoardsModule extends VuexModule implements BoardsModuleInterface {
  boards: Board[] = []
  currentBoardId = 1

  nextID() {
    return this.boards.length + 1
  }

  getBoard(id: number) {
    return this.boards.find(board => board.id === id)
  }

  currentBoard() {
    return this.boards.find(board => board.id === this.currentBoardId)
  }

  @Mutation
  clear() {
    this.boards = []
  }

  @Mutation
  addBoard(board: Board) {
    this.boards.push(board)
  }

  @Action
  goToNext() {
    const nr: number = this.currentBoardId + 1
    if (nr > this.boards.length) {
      console.log('This is the last Board!')
      return false
    } else {
      this.goTo(nr)
    }
  }

  @Action
  goToPrevious() {
    const nr: number = this.currentBoardId - 1
    if (nr === 0) {
      console.log('This is the first Board!')
      return false
    } else {
      this.goTo(nr)
    }
  }

  @Mutation
  goTo(id: number) {
    this.currentBoardId = id
    const board = this.boards.find(board => board.id === id)

    // Logging Changes
    const message = {
      text: 'go to Board',
      value: id,
      status: 'default',
      tag: 'panel',
    }
    if (!board) {
      const error = 'Board not found'
      console.warn(error, name)
      message.text = error
      message.status = 'error'
    }

    ConsoleStore.addMessage(message)
  }

  @Mutation
  updateBoards(boards: Board[]) {
    this.boards = boards
  }

  get list() {
    return this.boards
  }

  @Action({ commit: 'updateBoards' })
  async fetchBoards() {
    return [
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
  }
}
