import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../../app/dashboard/shared/employee.service';
@Component({
  selector: 'app-bench-emp',
  templateUrl: './bench-emp.component.html',
  styleUrls: ['./bench-emp.component.css']
})
export class BenchEmpComponent implements OnInit {
  count:number;
 Status() {
   this.count= this.employeeService.getStatus('bench');
}
  constructor(private employeeService:EmployeeService ) { }

  ngOnInit() {
    this.Status();
  }

}
