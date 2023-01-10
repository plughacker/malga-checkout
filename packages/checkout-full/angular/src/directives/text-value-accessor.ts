import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'checkout-input, checkout-select, checkout-input, checkout-select, checkout-input, checkout-input, malga-checkout-form',
  host: {
    '(changed)': 'handleChangeEvent($event.target.value)'
    '(inputed)': 'handleChangeEvent($event.target.value)'
    '(blurred)': 'handleChangeEvent($event.target.value)'
    '(focused)': 'handleChangeEvent($event.target.value)'
    '(fieldChange)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
