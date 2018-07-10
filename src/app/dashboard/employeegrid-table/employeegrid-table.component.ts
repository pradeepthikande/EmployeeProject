import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.interface';
@Component({
  selector: 'app-employeegrid-table',
  templateUrl: './employeegrid-table.component.html',
  styleUrls: ['./employeegrid-table.component.css']
})
export class EmployeegridTableComponent implements OnInit {
  employees: Employee[];
  emp: any[];
  cols: any[];

  constructor(private employeeService: EmployeeService) {
    this.loadEmployee.bind(this);
  }

  ngOnInit() {
    this.cols = [
      { field: 'sno', header: 'S.No' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'emailId', header: 'Email Id' },
      { field: 'dept', header: 'Department' },
      { field: 'designation', header: 'Designation' },
      { field: 'joinDate', header: 'Join Date' },
      { field: 'details', header: 'Details' }
    ];
    this.loadEmployee();
  }
  loadEmployee() {
    var that = this;
    // this.emp = [
    //   { sno: 'sno', firstName: 'S.No' },
    //   { sno: 'firstName', firstName: 'First Name' }
    // ];
    this.employeeService.getEmployee().then(function(employee) {
      console.log(employee);
      that.emp = <any>employee;
      console.log(that.emp);
    });
  }
}
