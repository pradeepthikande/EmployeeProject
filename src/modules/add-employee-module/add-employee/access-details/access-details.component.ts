import { Component, OnInit } from '@angular/core';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-access-details',
  templateUrl: './access-details.component.html',
  styleUrls: ['./access-details.component.css']
})
export class AccessDetailsComponent implements OnInit {
roles: SelectItem[];
   selectedRoles: string[] = [];
  constructor() {
       this.roles = [];
        this.roles.push({label: 'Admin', value: 'Admin'});
        this.roles.push({label: 'Employee', value: 'Employee'});
        this.roles.push({label: 'Hr manager', value: 'Hr manager'});
        this.roles.push({label: 'Developer', value: 'Developer'});
        this.roles.push({label: 'Tester', value: 'Tester'});
        this.roles.push({label: 'Ui-Developer', value: 'Ui-Developer'});
        // this.cars.push({label: 'Mercedes', value: 'Mercedes'});
        // this.cars.push({label: 'Renault', value: 'Renault'});
        // this.cars.push({label: 'VW', value: 'VW'});
        // this.cars.push({label: 'Volvo', value: 'Volvo'});
   }

  ngOnInit() {
  }

}
