import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core'

import CanvasCircularCountdown from 'canvas-circular-countdown'
import { Timer } from 'easytimer.js'

@Component({
  tag: 'checkout-countdown',
  styleUrl: 'checkout-countdown.scss',
})
export class CheckoutCountdown {
  countdownRef: HTMLCanvasElement
  timer = new Timer()

  @Prop() expirationTime?: number
  @Prop() filledProgressBarColor = '#2FAC9B'
  @Prop() emptyProgressBarColor = '#D8DFF0'

  @State() countdown: string

  @Event() countdownFinished: EventEmitter<void>

  private startCountdown = () => {
    this.timer.start({
      countdown: true,
      startValues: { seconds: this.expirationTime },
    })

    this.countdown = this.timer.getTimeValues().toString()
  }

  componentWillLoad() {
    if (this.expirationTime) {
      this.startCountdown()
    }
  }

  componentDidLoad() {
    if (this.expirationTime) {
      new CanvasCircularCountdown(
        this.countdownRef,
        {
          duration: this.expirationTime * 1000,
          radius: 45,
          emptyProgressBarBackgroundColor: this.emptyProgressBarColor,
          filledProgressBarBackgroundColor: this.filledProgressBarColor,
          progressBarWidth: 4,
          progressBarOffset: 1,
          showCaption: false,
        },
        (_, time) => {
          if (time.remaining === 0) {
            this.countdownFinished.emit()
          }

          this.countdown = this.timer.getTimeValues().toString()
        },
      ).start()
    }
  }

  private renderCountdownText = () => {
    const [hours, minutes, seconds] = this.countdown.split(':')

    if (hours === '00') {
      return `${minutes}:${seconds}`
    }

    return this.countdown
  }

  render() {
    return (
      <Host class={{ 'checkout-countdown__container': true }}>
        <canvas ref={(ref) => (this.countdownRef = ref)} />
        <checkout-typography
          tag="span"
          variation="header6"
          styles={{ color: this.filledProgressBarColor, fontWeight: '500' }}
          content={this.renderCountdownText()}
        />
      </Host>
    )
  }
}
