import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  conversionHistory: any[] = [];
  displayedColumns: string[] = ['date', 'from', 'to', 'amount', 'convertedAmount'];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    // Subscribe to conversion history updates.
    this.currencyService.conversionHistory$.subscribe((logs) => {
      this.conversionHistory = logs;
    });

    // Optionally, load the initial conversion history.
    this.currencyService.getConversionHistory().subscribe();
  }
}