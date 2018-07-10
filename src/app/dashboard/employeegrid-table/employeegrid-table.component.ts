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
    this.emp = [
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      },
      {
        sno: '01',
        firstName: 'Phani',
        lastName: 'Rahul',
        emailId: 'rahul.sivalenka@walkingtree.tech',
        dept: 'Software Engineer',
        designation: 'developer',
        joinDate: '31-dec-2018',
        details: 'View Details'
      }
    ];
    // this.employeeService.getEmployee().then(function(employee) {
    //   console.log(employee);
    //   that.emp = <any>employee;
    //   console.log(that.emp);
    // });
  }
}
