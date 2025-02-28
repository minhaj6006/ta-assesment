import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private apiUrl = '/api'; // assuming proxy config routes to backend

  // Create a BehaviorSubject to hold the conversion history.
  private conversionHistorySubject = new BehaviorSubject<any[]>([]);
  // Expose it as an observable.
  conversionHistory$ = this.conversionHistorySubject.asObservable();

  constructor(private http: HttpClient) { }

  // Call the conversion endpoint.
  convertCurrency(from: string, to: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/convert`, { from, to, amount }).pipe(
      tap(() => {
        // Once a conversion is successful, update the conversion history.
        this.updateConversionHistory();
      })
    );
  }

  // Get the conversion history from the backend.
  getConversionHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/conversions`).pipe(
      tap((data: any) => {
        // Update the subject with the new history.
        this.conversionHistorySubject.next(data.logs);
      })
    );
  }

  // Helper to trigger a refresh of the conversion history.
  updateConversionHistory(): void {
    this.getConversionHistory().subscribe();
  }
}
