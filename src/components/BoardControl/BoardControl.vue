<template>
  <div class="board-navigation">
    <!-- Station Navigation -->
    <div class="nicer-toolbar">
      <ul class="nav-horizontal nav-btn-group nav-max">
        <!-- previous Board -->
        <li class="nav-item nav-btn previous-board">
          <div v-on:click="previousBoard()">
            <el-tooltip :content="$t('Previous Board')" placement="bottom" :disabled="!showTooltip">
              <div v-if="showArrow" class="previous-board-arrow">
                <font-awesome-icon :icon="['fal', 'long-arrow-left']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
            <div v-if="showBoard" class="previous-board-text">
              {{ previousBoardItem.title }}
            </div>
          </div>
        </li>

        <!-- Current Board-->
        <li class="nav-item nav-text current-board-number" v-if="showCurrentBoard">
          <div>
            {{ currentBoard }}
          </div>
        </li>

        <!-- next Board -->
        <li class="nav-item  nav-btn next-board">
          <div v-on:click="nextBoard()">
            <el-tooltip :content="$t('Next Board')" placement="bottom" :disabled="!showTooltip">
              <div v-if="showArrow" class="next-board-arrow">
                <font-awesome-icon :icon="['fal', 'long-arrow-right']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
            <div v-if="showBoard" class="next-board-text">
              {{ nextBoardItem.title }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="showBoard" class="current-board">
      {{ currentBoardItem.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class BoardControl extends Vue {
  @Prop() tooltip: boolean | undefined
  @Prop() current: boolean | undefined
  @Prop() names: boolean | undefined
  @Prop() arrow: boolean | undefined

  currentBoardNumber = 1

  // Boards
  currentBoardItem = {
    title: 'Current',
  }

  nextBoardItem = {
    title: 'Next',
  }

  previousBoardItem = {
    title: 'Previous',
  }
  get currentBoard() {
    return this.currentBoardNumber
  }

  get showArrow() {
    return this.arrow ? this.arrow : true
  }

  get showBoard() {
    return this.names ? this.names : false
  }

  get showCurrentBoard() {
    return this.current ? this.current : false
  }

  get showTooltip() {
    return this.tooltip ? this.tooltip : true
  }
  // Boards
  nextBoard() {
    this.$bus.$emit('change_board', 'next')
  }

  previousBoard() {
    this.$bus.$emit('change_board', 'previous')
  }

  created() {
    this.$bus.$on('board', (nr: number) => {
      this.currentBoardNumber = nr
    })
  }
}

export default BoardControl
</script>

<style lang="scss">
@import 'BoardControl';
</style>
