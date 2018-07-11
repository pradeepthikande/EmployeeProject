import { Component, OnInit,Input } from '@angular/core';
import { EmployeeService} from '../../../app/dashboard/shared/employee.service';
@Component({
  selector: 'app-shadow-emp',
  providers: [
   
   EmployeeService
  ],
  templateUrl: './shadow-emp.component.html',
  styleUrls: ['./shadow-emp.component.css']
})
export class ShadowEmpComponent implements OnInit {
count:number=8;
constructor(private employeeService: EmployeeService ) { }
  Status() {
   this.count= this.employeeService.getStatus(this.count++);
}
  ngOnInit() {
  
}


}
