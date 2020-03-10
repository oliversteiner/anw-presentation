<template>
  <div class="simulator">
    <div :class="{ solo: showModal }">
      <div class="device shadow-display" :style="deviceSize" ref="mobileDevice">
        <div class="head">
          <!-- Toolbar -->
          <div class="toolbar">
            <!-- resize -->
            <div class="toolbar-item">
              <div class="toolbar-icon" @click="smaller()">
                <font-awesome-icon :icon="['fas', 'minus']"></font-awesome-icon>
              </div>
              <div class="toolbar-icon" @click="bigger()">
                <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
              </div>
            </div>

            <div
              class="toolbar-item simulator-move"
              @mousedown="movePanel()"
              @mouseup="restPanel()"
              @dblclick="toggleContent()"
            ></div>

            <div class="toolbar-item">
              <!-- solo-presentations-mode -->
              <div class="toolbar-link" @click="toggleSolo()">solo</div>
              <!-- close -->
              <div class="toolbar-icon" @click="close()">
                <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="screen">
          <div class="screen-ring">
            <div class="content">
              <!-- Start Hype -->
              <div class="nicerv5_hype_container sim-hype-container">
                <!--
                  <script type="text/javascript" charset="utf-8" src="hype/NICER_v5.hyperesources/nicerv5_hype_generated_script.js?85057"></script>
-->
              </div>
              <!-- End Hype -->
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="button">
            <svg height="100%" width="20%">
              <circle cx="50%" cy="50%" r="35%" stroke="black" stroke-width="2" fill="black" id="home-button" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { percentRounding } from '@/_helper/functions'
import { PanelStore } from '@/store'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class Simulator extends Vue {
  // Content

  // CSS
  deviceHeight = 700
  paddingTop = 5
  paddingRight = 20
  paddingLeft = 20
  paddingBottom = 5
  borderRadius = 25
  fontSize = 12
  showModal = false

  get deviceWidth() {
    return this.deviceHeight / 2
  }

  movePanel() {
    this.$emit('movePanel')
  }
  restPanel() {
    this.$emit('restPanel')
  }
  toggleContent() {
    this.$emit('toggleContent')
  }

  toggleSolo() {
    console.log('toggleSolo')
    this.showModal = !this.showModal
    this.$emit('modal')
  }
  smaller() {
    console.log('smaller')
    this.setDeviceSmaller()
  }
  bigger() {
    console.log('bigger')
    this.setDeviceBigger()
  }
  close() {
    PanelStore.closePanel('simulator')
  }

  closeSolo() {
    console.log('closeSolo')
  }

  get deviceSize() {
    return {
      height: this.deviceHeight + 'px',
      width: this.deviceWidth + 'px',
      paddingTop: this.paddingTop + 'px',
      paddingRight: this.paddingRight + 'px',
      paddingLeft: this.paddingLeft + 'px',
      paddingBottom: this.paddingBottom + 'px',
      borderRadius: this.borderRadius + 'px',
      fontSize: this.fontSize + 'px',
    }
  }

  setDeviceBigger() {
    this.deviceHeight = this.deviceHeight + 100
    this.paddingTop = this.paddingTop + 1
    this.paddingRight = this.paddingRight + 1
    this.paddingLeft = this.paddingLeft + 1
    this.paddingBottom = this.paddingBottom + 1
    this.borderRadius = this.borderRadius + 2
    this.fontSize = this.fontSize + 2
  }

  setDeviceSmaller() {
    this.deviceHeight = this.deviceHeight - 100
    this.paddingTop = this.paddingTop - 1
    this.paddingRight = this.paddingRight - 1
    this.paddingLeft = this.paddingLeft - 1
    this.paddingBottom = this.paddingBottom - 1
    this.borderRadius = this.borderRadius - 2
    this.fontSize = this.fontSize - 2
  }

  created() {
    this.$bus.$on('modal', (param: boolean) => {
      this.showModal = param
    })
  }
}

export default Simulator
</script>

<style lang="scss">
@import 'Simulator';
</style>
