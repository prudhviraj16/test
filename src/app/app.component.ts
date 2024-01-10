import { Component } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './app.module';
import { MatTableDataSource } from '@angular/material/table';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  public filteredDataSource: any
  public filters = {
    name : '',
    weight : ''
  }

  applyFilterFirstName(event: Event) {
    this.filters = {...this.filters, name : (event.target as HTMLInputElement).value}
  }

  applyFilterLastName(event : Event) {
    this.filters = {...this.filters, weight : (event.target as HTMLInputElement).value}
  }

  onSubmit() {
    let filterValues = '';
    if(this.filters.name) {
      const filterValue = this.filters.name;
      filterValues = filterValue.trim().toLowerCase();
    }
   
    if(this.filters.weight) {
      const filterValue = this.filters.weight;
      filterValues = filterValue.trim();
    }
   
    this.dataSource.filter = filterValues;
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) : any => 
      data.name.toLowerCase().includes(filter) || data.weight.includes(filter);
  }
}
