import { Component, OnInit } from '@angular/core';
import { Employee } from './shared/employee.interface';
import { AddressDetailsComponent } from '../../modules/add-employee-module/add-employee/address-details/address-details.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // directives:[AddressDetailsComponent]
})
export class DashboardComponent implements OnInit {

    visible=false;
    counter: number = 0;
    public currentpage = 0;

   onClick() {
      this.counter++;
      this.visible=!this.visible;
   }




changePage() {
        this.currentpage++;
}


prevPage(){
this.currentpage--
}

  constructor() { }
  
  employee: Employee = {
    sno: '',
    firstName: '',
    lastName: '',
    emailId: '',
    expDepartment: '',
    primarySkill: '',
    status: '',
    billable: false,
    expJoinDate: new Date,
    expSeparatedDate: '',
    joinDate: new Date,
    gender: '',
    department: '',
    cAddress: '',
    cCountry: '',
    cState: '',
    cCity: '',
    cZipCode: 0,
    checking: false,
    pAddress: '',
    pCountry: '',
    pState: '',
    pCity: '',
    pZipCode: 0,
    roles: ''
  };

  //  employee.firstName

 
 
  ngOnInit() {
  }
}
