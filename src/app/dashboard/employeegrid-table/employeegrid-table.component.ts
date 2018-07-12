import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.interface';
@Component({
  selector: 'app-employeegrid-table',
  templateUrl: './employeegrid-table.component.html',
  styleUrls: ['./employeegrid-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeegridTableComponent implements OnInit {

  emp: Employee[];
  cols: any[];
  errorMessage: string;
  visible = false;
  employeeValue: Employee;


  show(i) {
    this.visible = true;
    this.employeeValue = this.emp[i];
  }


  constructor(private employeeService: EmployeeService) {

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

    this.employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.emp = data.employee;
    });
  }
};
