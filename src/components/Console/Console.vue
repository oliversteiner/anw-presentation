<template>
  <div class="console">
    <div>
      <button v-if="list.length > 0" class=" console-btn-link" @click="clear()">[ clear]</button>
    </div>
    <table class="message-list-table">
      <tr v-for="item in list" class="message-list" :key="item.id" :class="'list-status-' + item.status">
        <td class="message-list message-list-id">{{ item.id }}</td>
        <td class="message-list message-list-tag">{{ item.tag }}</td>
        <td class="message-list message-list-text">{{ item.text }}</td>
        <td class="message-list message-list-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Message } from '@/_models/message'
import { ConsoleStore } from '@/store'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class Console extends Vue {
  get list() {
    return ConsoleStore.logs
  }

  clear() {
    ConsoleStore.clear()
  }

//  created() {}
}

export default Console
</script>

<style lang="scss">
@import 'Console';
</style>
