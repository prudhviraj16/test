import { Component } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from './app.module';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filterForm = new FormGroup({
    name: new FormControl(),
    weight: new FormControl(),
  });
  public filterValues = {
    name : '',
    weight : ''
  }

  get name() { return this.filterForm.get('name'); }
  get weight() { return this.filterForm.get('weight'); }


  ngOnInit(){
    this.formSubscribe();
    this.getFormsValue();
  }

  formSubscribe() {
    this.name?.valueChanges.subscribe((nameValue:string) => {
        this.filterValues['name'] = nameValue
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    
    this.weight?.valueChanges.subscribe((emailValue: string) => {
        this.filterValues['weight'] = emailValue
        this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  getFormsValue() {
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      let searchString = JSON.parse(filter);

      const resultValue =
        data.name?.toString().trim().toLowerCase().indexOf(searchString?.name.toLowerCase()) !== -1 &&
        data.weight?.toString().trim().toLowerCase().indexOf(searchString?.weight.toLowerCase()) !== -1
        
      return resultValue;

    }
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

}
