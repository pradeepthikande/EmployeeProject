// import { Employee } from './../../..//dashboard/shared/employee.interface';
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
  // emp:Employee[]
  visible = false;
  counter: number = 0;
  public currentpage = 0;

  // employee: Employee = {
  //   sno: ' ',
  //   firstName: '',
  //   lastName: '',
  //   emailId: '',
  //   expDepartment: '',
  //   primarySkill: '',
  //   status: '',
  //   billable: false,
  //   expJoinDate: new Date,
  //   expSeparatedDate: '',
  //   joinDate: new Date,
  //   gender: '',
  //   department: '',
  //   cAddress: ' ',
  //   cCountry: '',
  //   cState: '',
  //   cCity: '',
  //   cZipCode: 0,
  //   checking: false,
  //   pAddress: '',
  //   pCountry: '',
  //   pState: '',
  //   pCity: '',
  //   pZipCode: 0,
  //   roles: ''
  // }
  employeeValue: Employee = {
    sno: ' ',
    firstName: '',
    lastName: '',
    emailId: '',
    expDepartment: '',
    primarySkill:'',
    status:'',
    billable: false,
    expJoinDate: new Date,
    expSeparatedDate: new Date,
    joinDate: new Date,
    gender: '',
    department: '',
    cAddress: ' ',
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
    roles: '',
    bloodGroup:'',
    panNo:0,
    adharNo:0,
    phoneNum:0,
    maritalStatus:'',
    anniversaryDate: new Date



  };
  onClick() {
    this.counter++;
    this.visible = !this.visible;
  }

  // @Output() 

  receivingCurrentpage($event) {

    this.currentpage = $event;
    console.log(this.employeeValue)

  }

  savingData($event) {
    // this.sravani = $event;
    console.log($event);
  }
  constructor() {
    console.log(this.employeeValue);
  }





  ngOnInit() {
    // debugger;

    console.log(this.employeeValue);
  }
}
