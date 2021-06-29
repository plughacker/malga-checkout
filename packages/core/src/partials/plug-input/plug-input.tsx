import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core'

import {
  PlugInputMode,
  PlugInputType,
  PlugInputValue,
  PlugInputChangeEvent,
} from './plug-input.types'

import { PlugIconNames } from '../plug-icon/plug-icon.types'

@Component({
  tag: 'plug-input',
  styleUrl: 'plug-input.scss',
})
export class PlugInput implements ComponentInterface {
  @Prop() customContainerClass?: string
  @Prop() customLabelClass?: string
  @Prop() customInputClass?: string
  @Prop() startIcon?: PlugIconNames
  @Prop() hasValidation?: boolean
  @Prop() hasError?: boolean
  @Prop() max?: string
  @Prop() maxlength?: number
  @Prop() min?: string
  @Prop() minlength?: number
  @Prop() multiple?: boolean
  @Prop() placeholder?: string
  @Prop() label?: string
  @Prop() name: string
  @Prop() readonly = false
  @Prop() required = false
  @Prop() autofocus = false
  @Prop() disabled = false
  @Prop() inputmode: PlugInputMode = 'text'
  @Prop() type: PlugInputType = 'text'
  @Prop({ mutable: true }) value?: PlugInputValue = ''

  @Event() inputed!: EventEmitter<KeyboardEvent>
  @Event() changed!: EventEmitter<PlugInputChangeEvent>
  @Event() blurred!: EventEmitter<void>
  @Event() focused!: EventEmitter<void>

  @Watch('value')
  protected valueChanged() {
    this.changed.emit({
      value: this.value == null ? this.value : this.value.toString(),
    })
  }

  private onInput = (event: Event) => {
    const input = event.target as HTMLInputElement | null

    if (input) {
      this.value = input.value || ''
    }

    this.inputed.emit(event as KeyboardEvent)
  }

  private onBlur = () => {
    this.blurred.emit()
  }

  private onFocus = () => {
    this.focused.emit()
  }

  private getValue = (): string => {
    return typeof this.value === 'number'
      ? this.value.toString()
      : (this.value || '').toString()
  }

  private hasValue = (): boolean => this.getValue().length > 0

  render() {
    return (
      <Host
        class={{
          'plug-input__container': true,
          [this.customContainerClass]: !!this.customContainerClass,
        }}
      >
        {!!this.startIcon && (
          <plug-icon icon={this.startIcon} class="plug-input__start-icon" />
        )}

        {!!this.hasValidation && (
          <plug-icon
            icon={this.hasError ? 'warning' : 'check'}
            class="plug-input__end-icon"
          />
        )}

        {this.label && (
          <label
            htmlFor={this.name}
            class={{
              'plug-input__label': true,
              [this.customLabelClass]: !!this.customLabelClass,
            }}
          >
            {this.label}
          </label>
        )}

        <input
          class={{
            'plug-input__native': true,
            'plug-input__native--filled': this.hasValue(),
            'plug-input__native--start-icon': !!this.startIcon,
            'plug-input__native--end-icon': this.hasValidation,
            [this.customInputClass]: !!this.customInputClass,
          }}
          id={this.name}
          placeholder={this.placeholder}
          disabled={this.disabled}
          autoFocus={this.autofocus}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          multiple={this.multiple}
          name={this.name}
          readOnly={this.readonly}
          required={this.required}
          type={this.type}
          value={this.getValue()}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </Host>
    )
  }
}
