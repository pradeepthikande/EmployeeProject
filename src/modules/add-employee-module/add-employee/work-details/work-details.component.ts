import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
@Input() Currentpage:number
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
