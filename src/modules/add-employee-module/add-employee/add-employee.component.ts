import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../../../app/dashboard/shared/employee.interface';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
@Input() employee:Employee
// visible=false;
// public currentpage=0;

//  public changePage() {
//         this.currentpage++;
        
//       }



  constructor() { }

  ngOnInit() {
  }
}
