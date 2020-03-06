<template>
  <div class="console">
    <div v-if="showPanel" class="console-wrapper">
      <Moveable class="movable" v-bind="movable" @drag="handleDrag">
        <div class="console-panel">
          <div class="toolbar" v-on:mousedown="movePanel()" v-on:mouseup="restPanel()">
            <div class="toolbar-item">
              <div class="toolbar-icon"><font-awesome-icon :icon="['fas', 'terminal']"></font-awesome-icon></div>
              <div class="toolbar-title">Console</div>
            </div>
            <div class="toolbar-item">
              <div class="toolbar-btn" v-on:click="clear()">[ clearList ]</div>
            </div>
            <div class="toolbar-item">
              <div class="toolbar-btn toolbar-btn-close" v-on:click="closePanel()">
                <font-awesome-icon :icon="['fas', 'times-circle']"></font-awesome-icon>
              </div>
            </div>
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
      </Moveable>
    </div>
  </div>
</template>

<script lang="ts">
import { Message } from '@/_models/message'
import { Vue, Component, Prop } from 'vue-property-decorator'
// @ts-ignore - no proper declaration for vue-moveable
import Moveable from 'vue-moveable'

@Component({ components: { Moveable } })
class Console extends Vue {
  // Messages
  messages: Message[] = []
  messageId = 1

  // Panel Toggle
  showPanel = false

  // Panel Move
  movable: Moveable = {
    draggable: false,
    throttleDrag: 0,
    resizable: false,
    throttleResize: 1,
    keepRatio: false,
    scalable: false,
    throttleScale: 0,
    rotatable: false,
    throttleRotate: 0,
    pinchable: false, // ["draggable", "resizable", "scalable", "rotatable"]
    origin: false,
    className: 'movable-panel',
  }

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

  closePanel() {
    this.showPanel = false
  }

  togglePanel() {
    this.showPanel = !this.showPanel
  }

  movePanel() {
    this.movable.draggable = true
  }

  restPanel() {
    this.movable.draggable = false
  }

  created() {
    let eventId = null

    // Panel
    eventId = this.$bus.$on('toggle_panel', (params: any) => {
      if (params === 'console') {
        this.togglePanel()
      }
    })
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

  // @ts-ignore - no proper declaration for vue-moveable
  handleDrag({ target, transform }) {
    //  console.log('onDrag left, top', transform)
    target.style.transform = transform
  }
}

export default Console
</script>

<style lang="scss">
@import 'Console';
</style>
