import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../app/dashboard/shared/employee.service';
@Component({
  selector: 'app-non-billable-emp',
  templateUrl: './non-billable-emp.component.html',
  styleUrls: ['./non-billable-emp.component.css']
})
export class NonBillableEmpComponent implements OnInit {

  
count:number;
constructor(private employeeService: EmployeeService ) { }
  Status() {
   this.count= this.employeeService.getStatus('billable');
}

  ngOnInit() {
     this.Status();
  }

}
