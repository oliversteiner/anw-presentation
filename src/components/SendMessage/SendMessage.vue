<template>
  <div class="send-message nicer-toolbar">
    <!-- Trigger for Predifined List -->
    <div class="input-group">
      <button class="input-group-item input-btn" v-on:click="togglePredefined()">
        <font-awesome-icon :icon="['fas', 'smile']"></font-awesome-icon>
      </button>
      <!-- Text input -->
      <input
        class="input-group-item input-text"
        ref="input-message"
        v-model="message"
        type="text"
        v-on:keypress.enter="sendMessage()"
      />

      <!-- Clear Button -->
      <button type="reset" class="input-group-item input-btn-clear" v-on:click.prevent="resetMessage()">
        <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
      </button>

      <!-- Send Button -->
      <button type="submit" class="input-group-item input-btn" v-on:click.prevent="sendMessage()">Send</button>

      <!-- Close Button -->
      <button class="input-group-item input-btn" v-if="showClose">
        <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
      </button>
    </div>

    <div v-if="showPredefined" class="predefined">
      <!-- Emoji -->
      <div class="message-predefined-emoji nicer-toolbar">
        <ul class=" nav-horizontal">
          <li v-for="emoji in emojiList" :key="emoji.id" v-on:click="sendEmoji(emoji.id)" class="nav-item">
            <div class="nav-btn-icon emoji-btn">
              <font-awesome-icon :icon="['fas', emoji.name]"></font-awesome-icon>
            </div>
          </li>
        </ul>
      </div>
      <!-- Predefined Messages -->
      <div class="message-predefined-text">
        <ul class="">
          <li v-for="message in textList" :key="message.id" v-on:click="sendText(message.id)">
            <div class="text-btn">{{ message.text }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import th from 'element-ui/src/locale/lang/th'
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Emoji {
  id: number
  name: string
}

interface Text {
  id: number
  text: string
}

interface Message {
  id: number
  text: Text | null
  emoji: Emoji | null
}

@Component({ components: {} })
class SendMessage extends Vue {
  @Prop() close: boolean | undefined
  // Content
  showPredefined = false
  message = ''

  texts: Text[] = [
    {
      id: 1,
      text: 'Hello',
    },
    {
      id: 2,
      text: 'Thank You',
    },
    {
      id: 3,
      text: 'Good By',
    },
  ]
  emojis: Emoji[] = [
    {
      id: 1,
      name: 'smile',
    },
    {
      id: 2,
      name: 'smile-wink',
    },
    {
      id: 3,
      name: 'smile',
    },
    {
      id: 4,
      name: 'smile',
    },
    {
      id: 5,
      name: 'smile',
    },
  ]

  get showClose() {
    return this.close ? this.close : false
  }

  get emojiList() {
    return this.emojis
  }

  get textList() {
    return this.texts
  }

  sendEmoji(id: number) {
    console.log('setEmoji', id)
    const item = this.emojis.find(item => {
      return item.id === id
    })
    if (item) {
      this.send(null, item)
    }
  }

  sendText(id: number) {
    console.log('sendText', id)
    const item = this.texts.find(item => {
      return item.id === id
    })
    if (item) {
      this.send(item, null)
    }
  }

  resetMessage() {
    this.message = ''
  }

  sendMessage() {
    if (this.message == '') {
      return false
    }

    const text: Text = {
      id: 0,
      text: this.message,
    }
    this.send(text, null)
  }

  togglePredefined() {
    this.showPredefined = !this.showPredefined
  }

  send(text: Text | null, emoji: Emoji | null) {
    const message: Message = {
      id: 1,
      text: text,
      emoji: emoji,
    }
    this.$bus.$emit('message', message)
    console.log('sendMessage', message)
  }

  cancel() {}
}

export default SendMessage
</script>

<style lang="scss">
@import 'SendMessage';
</style>
