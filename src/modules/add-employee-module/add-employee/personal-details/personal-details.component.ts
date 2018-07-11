import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
selectedDepartment: string;
  department;
  constructor() {
    this.department = [];
    this.department.push({label:'Employees', value:{id:1, name: 'Employees', code: 'EMP'}});
    this.department.push({label:'Utilization', value:{id:1, name: 'Utilization', code: 'UTI'}});
  }


  ngOnInit() {
  }

}
