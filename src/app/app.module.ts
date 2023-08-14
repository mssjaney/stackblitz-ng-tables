import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [AppComponent, TableComponent, SummaryComponent],
  imports: [BrowserModule, MatButtonModule, MatTableModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
