// frontend/src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { HistoryComponent } from './components/history/history.component';
import { ThousandSeparatorDirective } from './directives/thousand-separator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    HistoryComponent,
    ThousandSeparatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
