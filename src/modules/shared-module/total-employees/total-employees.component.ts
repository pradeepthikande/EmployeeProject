import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../app/dashboard/shared/employee.service';

@Component({
  selector: 'app-total-employees',
  templateUrl: './total-employees.component.html',
  styleUrls: ['./total-employees.component.css']
})
export class TotalEmployeesComponent implements OnInit {

  count:number=155;
constructor(private employeeService: EmployeeService ) { }
  Status() {
   this.count= this.employeeService.getStatus(this.count++);
}

  ngOnInit() {
  }

}
