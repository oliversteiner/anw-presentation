<template>
  <div class="character-control">
    <!-- Content -->

    <!-- Group Char-->
    <div class="group group-char nicer-toolbar">
      <ul class="nav-horizontal nav-btn-group">
        <li
          v-for="character in characterList"
          :key="character.id"
          class="character nav-item nav-btn"
          v-on:click="changeCharacter(character.id)"
        >
          {{ character.name }}
        </li>
      </ul>
    </div>
    <!--Group Action -->
    <div class="group group-char nicer-toolbar">
      <ul class="nav-horizontal nav-btn-group">
        <!-- Go -->
        <li class="go nav-item nav-btn-icon" v-on:click="go()">
          <font-awesome-icon :icon="['fas', 'walking']"></font-awesome-icon>
        </li>
        <!-- Pause-->
        <li class="pause nav-item  nav-btn-icon" v-on:click="pause()">
          <font-awesome-icon :icon="['fas', 'mug-tea']"></font-awesome-icon>
        </li>
        <!-- Greet-->
        <li class="greet nav-item  nav-btn-icon" v-on:click="greet()">
          <font-awesome-icon :icon="['fas', 'smile-wink']"></font-awesome-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface NicerCharacter {
  id: number
  name: string
  images: {
    idle: string
    go: string
    pause: string
    preview: string
  }
}

@Component({ components: {} })
class CharacterControl extends Vue {
  // Content

  characters: NicerCharacter[] = [
    {
      id: 1,
      name: 'Kevin',
      images: {
        idle: 'k1',
        go: 'k2',
        pause: 'k3',
        preview: 'k4',
      },
    },
    {
      id: 2,
      name: 'Group',
      images: {
        idle: 'g1',
        go: 'g2',
        pause: 'g3',
        preview: 'g4',
      },
    },

    {
      id: 3,
      name: 'Bus',
      images: {
        idle: 'b1',
        go: 'b2',
        pause: 'b3',
        preview: 'b4',
      },
    },
  ]

  get characterList() {
    return this.characters
  }

  go() {
    console.log('set Character to GO')
    this.$bus.$emit('character_action', 'go')
  }
  pause() {
    console.log('set Character to PAUSE')
    this.$bus.$emit('character_action', 'pause')
  }

  greet() {
    console.log('set Character to GREET')
    this.$bus.$emit('character_action', 'greet')
  }

  changeCharacter(id: number) {
    console.log('change Character to', id)
    this.$bus.$emit('change_character', id)
  }
}
export default CharacterControl
</script>

<style lang="scss">
@import 'CharacterControl';
</style>
