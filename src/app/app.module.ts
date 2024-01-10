import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: '1.0079', symbol: 'H'},
  {position: 1, name: 'Hydrogen', weight: '1.0078', symbol: 'H'},
  {position: 2, name: 'Helium', weight: '4.0026', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: '6.941', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: '9.0122', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: '10.811', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: '12.0107', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: '14.0067', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: '15.9994', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: '18.9984', symbol: 'F'},
  {position: 10, name: 'Neon', weight: '20.1797', symbol: 'Ne'},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
