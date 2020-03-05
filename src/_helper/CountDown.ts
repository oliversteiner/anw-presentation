/**
 * https://codereview.stackexchange.com/questions/215161/a-countdown-clock-in-typescript
 *
 *
 *
 */

export interface TickEvent {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface CountdownEvents {
  tick(values: TickEvent): void
  expired(): void
  stop(): void
}

// Unfortunately we can't use T[K][] without getting messy.
type EventMap<T> = { [K in keyof T]: Function[] }

export class Countdown {
  private listeners: EventMap<CountdownEvents> = { tick: [], expired: [], stop: [] }
  private timer?: NodeJS.Timeout

  on<K extends keyof CountdownEvents>(eventName: K, listener: CountdownEvents[K]): void {
    this.listeners[eventName].push(listener)
  }

  off<K extends keyof CountdownEvents>(eventName: K, listener: CountdownEvents[K]): void {
    const listeners = this.listeners[eventName]
    const index = listeners.indexOf(listener)
    if (index !== -1) {
      listeners.splice(index, 1)
    }
  }

  start(date: Date) {
    const end = Math.floor(date.getTime() / 1000)

    const tick = () => {
      const now = Date.now()
      const nowSec = Math.floor(now / 1000)
      const time = end - nowSec

      if (time <= 0) {
        delete this.timer
        this.listeners.expired.forEach(listener => listener())
        return
      }

      const minute = 60
      const hour = minute * 60
      const day = hour * 24

      const days = Math.floor(time / day)
      const hours = Math.floor((time % day) / hour)
      const minutes = Math.floor((time % hour) / minute)
      const seconds = time % minute

      this.listeners.tick.forEach(listener => listener({ days, hours, minutes, seconds }))

      const timeToNextSecond = (nowSec + 1) * 1000 - now
      this.timer = setTimeout(tick, timeToNextSecond)
    }

    tick()
  }

  stop() {
    if (this.timer) {
      clearTimeout(this.timer)
      delete this.timer
      this.listeners.stop.forEach(listener => listener())
    }
  }
}
/*

const countdown = new Countdown()
countdown.on('tick', event => console.log('tick', event))
countdown.on('expired', () => console.log('expired'))
countdown.on('stop', () => console.log('stopped'))

const date = new Date()
date.setSeconds(date.getSeconds() + 20)
countdown.start(date)

setTimeout(() => countdown.stop(), 3 * 1000)
*/
