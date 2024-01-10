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

  applyFilterFirstName(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => data.name.toLowerCase().includes(filter);
  }

  applyFilterLastName(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => data.weight.toLowerCase().includes(filter);
  }
}
