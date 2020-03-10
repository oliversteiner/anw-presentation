import { Board, BoardResponse } from '@/_models/board'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store, { ConsoleStore } from '@/store'
import * as api from '@/store/api'

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
  updateBoards(boardList: BoardResponse) {
    this.boards = boardList.boards
    console.log('boards', boardList);

  }

  get list() {
    return this.boards
  }

  @Action({ commit: 'updateBoards' })
  async fetchBoards() {
    return await api.getBoardList()
  }
}
