<template>
  <div class="header">
    <!-- Title-->
    <div class="title">A Nicer Way</div>

    <!-- Toolbar -->
    <div class="toolbar-container">
      <div class="toolbar-wrapper">
        <transition name="fade">
          <div v-if="show">
            <ul class="toolbar-menu">
              <!-- Stations-->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Stations')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'list']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Edit -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Edit Station')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['far', 'file-edit']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Simulator -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Cell Phone Simulator')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['far', 'mobile']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>
              <!-- Console -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Console')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'terminal']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Remote -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Remote')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'calculator']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Help -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Help')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'question-circle']" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Character -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Character')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'chess-knight']" flip="horizontal" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>

              <!-- Editor -->
              <li>
                <div class="toolbar-btn">
                  <el-tooltip :content="$t('Editor')" placement="bottom">
                    <div>
                      <font-awesome-icon :icon="['fas', 'pen-square']" flip="horizontal" ></font-awesome-icon>
                    </div>
                  </el-tooltip>
                </div>
              </li>
            </ul>
          </div>
        </transition>

        <!-- Button Show Toolbar -->
        <div class="container-toggle-button" v-on:click="show = !show">
          <font-awesome-icon v-if="show" :icon="['fas', 'caret-up']" size="lg"></font-awesome-icon>
          <font-awesome-icon v-if="!show" :icon="['fas', 'caret-down']" size="lg"></font-awesome-icon>
        </div>
      </div>
    </div>

    <!-- Station Navigation -->
    <div class="station-navigation">
      <ul class="toolbar-station-control">
        <!-- last Station -->
        <li>
          <div class="station-control-item">
            <el-tooltip :content="$t('Last Station')" placement="bottom">
              <div>
                <font-awesome-icon :icon="['fal', 'long-arrow-left']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
          </div>
        </li>

        <!-- next Station -->
        <li>
          <div class="station-control-item">
            <el-tooltip :content="$t('Next Station')" placement="bottom">
              <div>
                <font-awesome-icon :icon="['fal', 'long-arrow-right']" size="lg"></font-awesome-icon>
              </div>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class Header extends Vue {
  show = false
}

export default Header
</script>

<style lang="scss">
@import 'Header';
</style>
