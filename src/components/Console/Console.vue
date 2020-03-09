<template>
  <div class="console">
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
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class Console extends Vue {
  // Messages
  messages: Message[] = []
  messageId = 1

  get list() {
    return this.messages
  }

  clearList() {
    this.messages = []
  }

  addMessage(tag: string, text: string, value: any) {
    const message: Message = {
      id: this.messageId++,
      text: text,
      value: value,
      status: 'default',
      tag: tag,
    }
    this.messages.push(message)
  }

  created() {
    let eventId = null

    // Slides
    eventId = this.$bus.$on('change_board', (params: any) => {
      this.addMessage('Board', 'change to', params)
    })

    // Characters
    eventId = this.$bus.$on('change_character', (params: any) => {
      this.addMessage('Character', 'change to ', params)
    })

    eventId = this.$bus.$on('character_action', (params: any) => {
      this.addMessage('Character', 'set action ', params)
    })

    // Messages

    eventId = this.$bus.$on('message', (params: any) => {
      if (params.emoji) {
        this.addMessage('Message', 'emoji ', params.emoji.name)
      }

      if (params.text) {
        this.addMessage('Message', 'text', params.text.text)
      }
    })
  }
}

export default Console
</script>

<style lang="scss">
@import 'Console';
</style>
