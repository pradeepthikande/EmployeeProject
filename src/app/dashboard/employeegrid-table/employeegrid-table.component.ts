import { Component, OnInit } from '@angular/core';
 import { EmployeeService } from "../shared/employee.service"
import { Employee } from "../shared/employee.interface";
@Component({
  selector: 'app-employeegrid-table',
  templateUrl: './employeegrid-table.component.html',
  styleUrls: ['./employeegrid-table.component.css']
})
export class EmployeegridTableComponent implements OnInit {
employees:Employee[];

    cols: any[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
