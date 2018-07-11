import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../app/dashboard/shared/employee.service';
@Component({
  selector: 'app-non-billable-emp',
  templateUrl: './non-billable-emp.component.html',
  styleUrls: ['./non-billable-emp.component.css']
})
export class NonBillableEmpComponent implements OnInit {

  
count:number=21;
constructor(private employeeService: EmployeeService ) { }
  Status() {
   this.count= this.employeeService.getStatus(this.count++);
}
  ngOnInit() {
  }

}
