<template>
  <div class="timer" :class="{ 'time-near-end': timeNearEnd, 'time-out': timesRunningOut }">
    <div class=" flip-container" :class="{ flip: showSettings }">
      <div class="flipper">
        <!-- Timer Light -->
        <div class="timer-light flip-front ">
          <div class="timer-display">
            <!-- Placeholder for Flex Position-->
            <div class="flip-area" v-on:click.prevent="showSettings = true"></div>

            <!-- Center -->
            <div class="row" v-on:click="toggleSecondsAndMinutes()">
              <!-- Timer-->
              <div class="timer-number">
                <div class="row">
                  <div class="display-minutes" v-if="showMinutes">{{ displayMinutes }}</div>
                  <div :class="{ 'seconds-high': showSeconds && showMinutes }"
                       v-if="showSeconds">
                    {{ displaySeconds }}
                  </div>
                </div>
              </div>

              <!-- Indicator & Unit -->
              <div class="indicator-unit">
                <div class="timer-indicator" :class="{ active: running, pause: pause }"></div>
                <div class="timer-unit">
                  <div v-if="showSeconds && !showMinutes">sec</div>
                  <div v-if="showMinutes && !showSeconds">min</div>
                </div>
              </div>
            </div>

            <!-- Placeholder for Flex Position-->
            <div class="flip-area" v-on:click.prevent="showSettings = true"></div>
          </div>
        </div>

        <!-- Timer Full -->
        <div class="timer-full flip-back">
          <div class="">
            <!-- Timer Display -->
            <div class="timer-display">
              <!-- Placeholder for Flex Position-->
              <div></div>

              <div class="row">
                <!-- Timer-->
                <div class="timer-number">
                  <!-- timer-display-input -->
                  <div v-if="setTimerManual" class="timer-display-input">
                    <form v-on:submit.prevent="checkTimer()">
                      <input
                        v-on:focusout="checkTimer()"
                        type="number"
                        ref="inputMinutes"
                        v-model="minutes"
                        pattern="\d*"
                        min="0"
                        max="999"
                        step="1"
                        class="timer-number-input"
                      />:
                      <input
                        v-on:focusout="checkTimer()"
                        type="number"
                        ref="inputSeconds"
                        v-model="seconds"
                        pattern="\d*"
                        min="0"
                        max="59"
                        step="1"
                        class="timer-number-input"
                      />
                    </form>
                  </div>

                  <div v-if="!setTimerManual">
                    <div class="row">
                      <div class="display-minutes" v-on:click="setTimer('min')" v-if="showMinutes">
                        {{ displayMinutes }}
                      </div>
                      <div
                        :class="{ 'seconds-high': showSeconds && showMinutes }"
                        v-on:click="setTimer('sec')"
                        v-if="showSeconds"
                      >
                        {{ displaySeconds }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Indicator & Unit -->
                <div class="indicator-unit">
                  <div class="timer-indicator" :class="{ active: running }"></div>
                  <div class="timer-unit">
                    <div v-if="showSeconds && !showMinutes">sec</div>
                    <div v-if="showMinutes && !showSeconds">min</div>
                  </div>
                </div>
              </div>
              <!-- Close Timer Full -->
              <div>
                <button class="icon timer-full-close-button" v-on:click="showSettings = false">
                  <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                </button>
              </div>
            </div>

            <!-- Timer Controll -->
            <div class="timer-controls">
              <!-- Set Timer to Minutes -->
              <button class="mode-button" v-on:click="setTimerToMinutes()">
                min
              </button>

              <!-- start -->
              <button v-if="!running && !expired" class="  start-button" v-on:click="startTimer()">
                <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
              </button>

              <!-- pause -->
              <button v-if="running" class="   pause-button" v-on:click="pauseTimer()">
                <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
              </button>

              <!-- stop  -->
              <button v-if="!expired" class=" stop-button" v-on:click="stopTimer()">
                <font-awesome-icon :icon="['fas', 'stop']"></font-awesome-icon>
              </button>

              <!-- reset  -->
              <button v-if="expired" class=" reset-button" v-on:click="resetTimer()">
                <font-awesome-icon :icon="['fas', 'redo']"></font-awesome-icon>
              </button>

              <!-- Set Timer to Seconds -->
              <button class="mode-button" v-on:click="setTimerToSeconds()">
                sec
              </button>
            </div>

            <!-- Timer Settings -->
            <div class="timer-settings">
              <div class="button-group" v-if="!running">
                <!-- Minus 1 Minute -->
                <button type="button" class="  set-time-button button-first" v-on:click="setTimerMinusOne()">
                  <font-awesome-icon :icon="['fas', 'minus']"></font-awesome-icon>
                </button>
                <!-- set to 5 Minutes -->
                <button type="button" class="   set-time-button" v-on:click="setTimerTo(5)">5</button>
                <!-- set to 10 Minutes -->
                <button type="button" class="  set-time-button" v-on:click="setTimerTo(10)">
                  10
                </button>
                <!-- set to 20 Minutes -->
                <button type="button" class="   set-time-button" v-on:click="setTimerTo(20)">
                  20
                </button>
                <!-- set to 30 Minutes -->
                <button type="button" class="    set-time-button" v-on:click="setTimerTo(30)">
                  30
                </button>
                <!-- Plus 1 Minute -->
                <button type="button" class="    set-time-button button-last" v-on:click="setTimerPlusOne()">
                  <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
                </button>
              </div>
            </div>

            <!-- Warning Settings -->
            <div class="warning-settings">
              <vue-slider
                class="slider slider-time-near-end"
                name="slider-time-near-end"
                :min="timeNearEndMinValue"
                :max="maxValueForSlider"
                :interval="intervalSlider"
                v-model="timeNearEndValue"
              >
              </vue-slider>

              <!-- prettier-ignore-attribute -->
              <vue-slider
                class="slider slider-times-run-out"
                name="slider-times-run-out"
                :min="timesRunningOutMinValue"
                :max="maxValueForSlider"
                :interval="intervalSlider"
                v-model="timesRunningOutValue"
              >
              </vue-slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Countdown } from '@/_helper/CountDown'
import th from 'element-ui/src/locale/lang/th'
import { Vue, Component, Prop } from 'vue-property-decorator'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

@Component({ components: { VueSlider } })
class Timer extends Vue {
  showSettings = false
  seconds = 0
  minutes = 20
  showMinutes = true
  showSeconds = false
  displayMode = 1

  setTimerManual = false
  fullTimer = true
  showOnlySeconds = false
  secTemp = false

  countDown!: Countdown
  // Timer Status
  running = false
  expired = false
  pause = false
  timesRunningOut = false
  timeNearEnd = false

  // Warning Stages
  timeNearEndValue = 5
  timesRunningOutValue = 2

  // Settings
  secondsOrigin = 0
  minutesOrigin = 0
  toggleSettings() {
    //
  }

  // Range Slider
  intervalSlider = 1
  timeNearEndMinValue = 2
  timesRunningOutMinValue = 1

  get maxValueForSlider() {
    if (this.showOnlySeconds) {
      return this.seconds
    }
    return this.minutes
  }

  get displaySeconds() {
    const seconds: string = this.seconds.toString()
    return seconds.padStart(2, '0')
  }

  get displayMinutes() {
    if (!this.showSeconds) {
      if (this.running) {
        return this.minutes + 1
      }
      return this.minutes
    }
    return this.minutes
  }

  setTimerToSeconds() {
    this.showOnlySeconds = true
    this.showMinutes = false
    this.showSeconds = true
  }

  setTimerToMinutes() {
    this.showOnlySeconds = false
    this.showMinutes = true
    this.showSeconds = false
  }
  setTimerToMinAndSec() {
    this.showOnlySeconds = false
    this.showMinutes = true
    this.showSeconds = true
  }

  toggleSecondsAndMinutes() {
    console.log('Mode', this.displayMode)

    if (this.displayMode == 1) {
      this.displayMode = 2
      this.showMinutes = true
      this.showSeconds = true
    } else if (this.displayMode == 2) {
      this.displayMode = 3
      this.showMinutes = false
      this.showSeconds = true
    } else if (this.displayMode == 3) {
      this.displayMode = 1
      this.showMinutes = true
      this.showSeconds = false
    }
  }

  // Timer
  setTimer(mode: string) {
    this.setTimerManual = true
    this.showSeconds = true
    this.showMinutes = true
    this.showOnlySeconds = false

    if (!this.running) {
      this.$nextTick(() => {
        if (mode === 'sec') {
          // @ts-ignore
          this.$refs.inputSeconds.select()
        } else {
          // @ts-ignore
          this.$refs.inputMinutes.select()
        }
      })
    }
  }

  // Set Timer
  setTimerPlusOne() {
    if (this.showOnlySeconds) {
      if (this.seconds < 999) {
        this.seconds++
      }
    } else {
      if (this.minutes < 999) {
        this.minutes++
      }
    }
  }
  setTimerMinusOne() {
    if (this.showOnlySeconds) {
      if (this.seconds > 0) {
        this.seconds--
      }
    } else {
      if (this.minutes > 0) {
        this.minutes--
      }
    }
  }
  setTimerTo(timer: number) {
    if (this.showOnlySeconds) {
      this.seconds = timer
      this.minutes = 0
    } else {
      this.minutes = timer
      this.seconds = 0
    }
  }

  checkTimer() {
    this.setTimerManual = false
    if (this.minutes > 999) {
      this.minutes = 999
    }
    if (this.seconds > 59) {
      this.seconds = 59
    }
    if (!this.minutes) {
      this.minutes = 0
    }
    if (!this.seconds) {
      this.seconds = 0
    }
  }

  startTimer() {
    this.running = true
    this.expired = false
    if (!this.pause) {
      this.minutesOrigin = this.minutes
      this.secondsOrigin = this.seconds
    }

    this.countDown = new Countdown()

    // Tick
    this.countDown.on('tick', event => {
      console.log('tick', event)
      this.minutes = event.minutes
      this.seconds = event.seconds

      if (!this.showOnlySeconds) {
        // Near End
        if (event.minutes === this.timeNearEndValue) {
          console.log('stageTimeNearEnd')
          this.timeNearEnd = true
        }

        // Time Up
        if (event.minutes === this.timesRunningOutValue) {
          console.log('Time Up')
          this.timeNearEnd = false
          this.timesRunningOut = true
        }

        // Change to Seconds on the last Minute
        // Time Up
        if (event.minutes === 0 && event.seconds === 59) {
          console.log('Change to Seconds')
          this.timeNearEnd = false
          this.timesRunningOut = true
          this.secTemp = true
        }
      } else {
        // Near End
        if (event.seconds === this.timeNearEndValue) {
          console.log('stageTimeNearEnd')
          this.timeNearEnd = true
        }

        // Time Up
        if (event.seconds === this.timesRunningOutValue) {
          console.log('Time Up')
          this.timeNearEnd = false
          this.timesRunningOut = true
        }
      }
    })

    // Expired
    this.countDown.on('expired', () => {
      console.log('expired')
      this.minutes = 0
      this.seconds = 0
      this.running = false
      this.expired = true
    })
    // Stop
    this.countDown.on('stop', () => console.log('stopped'))

    // Start
    const count = this.seconds + this.minutes * 60

    const date = new Date()
    date.setSeconds(date.getSeconds() + count)
    this.countDown.start(date)

    // setTimeout(() => this.countDown.stop(), (this.timer-1) * 1000)
  }
  pauseTimer() {
    this.pause = true
    this.running = false
    this.countDown.stop()
  }
  stopTimer() {
    this.countDown.stop()
    this.resetTimer()
  }

  resetTimer() {
    this.pause = false
    this.seconds = this.secondsOrigin
    this.minutes = this.minutesOrigin
    this.timesRunningOut = false
    this.timeNearEnd = false
    this.running = false
    this.expired = false
  }
}

export default Timer
</script>

<style lang="scss">
@import 'Timer';
</style>
