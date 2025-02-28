import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('show', style({
        opacity: 1,
        height: '*'
      })),
      state('hide', style({
        opacity: 0,
        height: '0px',
        overflow: 'hidden'
      })),
      transition('show <=> hide', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ConversionComponent implements OnInit {
  currencies: string[] = [
    'EUR', 'USD', 'JPY', 'BGN', 'CZK', 'DKK', 'GBP', 'HUF', 'PLN', 'RON',
    'SEK', 'CHF', 'ISK', 'NOK', 'HRK', 'RUB', 'TRY', 'AUD', 'BRL', 'CAD',
    'CNY', 'HKD', 'IDR', 'ILS', 'INR', 'KRW', 'MXN', 'MYR', 'NZD', 'PHP',
    'SGD', 'THB', 'ZAR'
  ];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  convertedAmount: number | null = null;
  isLoading: boolean = false;
  error: string = '';

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void { }

  convert(): void {
    this.isLoading = true;
    this.error = '';
    this.convertedAmount = null;
    const rawAmount = parseFloat(this.amount.toString().replace(/,/g, ''));
    this.currencyService.convertCurrency(this.fromCurrency, this.toCurrency, rawAmount)
      .subscribe({
        next: (response: any) => {
          this.convertedAmount = response.convertedAmount;
          this.isLoading = false;
        },
        error: (err: any) => {
          // Display error returned by the backend if available
          this.error = err.error && err.error.error ? err.error.error : 'Conversion failed. Please try again.';
          this.isLoading = false;
        }
      });
  }
}
