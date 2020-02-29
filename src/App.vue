<template>
  <div id="app">
    <!-- Settings Menu-->
    <div class="settings-menu-container">
      <el-dropdown>
        <span class="el-dropdown-link">
          <font-awesome-icon :icon="['fas', 'cog']" size="lg"></font-awesome-icon>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">Home</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/about">About</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/dev">Develop</router-link>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
class App extends Vue {
  showSettings = true
}

export default App
</script>

<style lang="scss">
@import 'src/scss/colors/colors';

#app {
  margin: 20px;
}

.settings-menu-container {
  padding: 10px;
  position: absolute;
  right: 20px;
  top: 20px;
}

.el-dropdown-link:hover {
  color: $color-text-link-hover;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
