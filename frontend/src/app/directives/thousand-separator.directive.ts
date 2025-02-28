import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThousandSeparator]'
})
export class ThousandSeparatorDirective {

  constructor(private _inputEl: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = this._inputEl.nativeElement.value;
    // Allow just a "-" or empty value (in case user is still typing)
    if (value === '-' || value === '') return;

    // Remove existing commas
    const rawValue = value.replace(/,/g, '');
    let formattedValue = '';

    if (rawValue.includes('.')) {
      const [integerPart, fractionalPart] = rawValue.split('.');
      const intNumber = parseInt(integerPart, 10);
      if (isNaN(intNumber)) {
        formattedValue = '';
      } else {
        // Format the integer part and keep the fractional part as is.
        formattedValue = intNumber.toLocaleString('en-US') + '.' + fractionalPart;
      }
    } else {
      const intNumber = parseInt(rawValue, 10);
      formattedValue = isNaN(intNumber) ? '' : intNumber.toLocaleString('en-US');
    }

    this._inputEl.nativeElement.value = formattedValue;
  }
}
