import { Component, OnInit, Input, Output, EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';

import { Employee } from '../../../../app/dashboard/shared/employee.interface';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit,OnChanges {

  // @Input() sravani: Employee;

  @Input() employeeValue: Employee;


  public currentpage: number;

  @Output() pageEvent = new EventEmitter<number>();

  @Output() page = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit() {
    // debugger;
    // if (this.sravani === undefined) {
    //   this.sravani = {
    //     sno: ' ',
    //     firstName: '',
    //     lastName: '',
    //     emailId: '',
    //     expDepartment: '',
    //     primarySkill: '',
    //     status: '',
    //     billable: false,
    //     expJoinDate: new Date,
    //     expSeparatedDate: '',
    //     joinDate: new Date,
    //     gender: '',
    //     department: '',
    //     cAddress: ' ',
    //     cCountry: '',
    //     cState: '',
    //     cCity: '',
    //     cZipCode: 0,
    //     checking: false,
    //     pAddress: '',
    //     pCountry: '',
    //     pState: '',
    //     pCity: '',
    //     pZipCode: 0,
    //     roles: ''
    //   };
    // }
    

    // console.log(this.sravani);

    if (this.employeeValue === undefined) {
      this.employeeValue= {
        sno: ' ',
        firstName: '',
        lastName: '',
        emailId: '',
        expDepartment: '',
        primarySkill: '',
        status: '',
        billable: false,
        expJoinDate: new Date(),
        expSeparatedDate: new Date(),
        joinDate: new Date(),
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
        roles: '',
        bloodGroup: '',
         panNo:0,
    adharNo:0,
    phoneNum:0,
    maritalStatus:'',
    anniversaryDate:new Date()
      };
    }

  }


changeAddress(){
  this.employeeValue.checking==true;

if(this.employeeValue.checking = true){
  this.employeeValue.pAddress=this.employeeValue.cAddress;
  this.employeeValue.pCity=this.employeeValue.cCity;
  this.employeeValue.pCountry=this.employeeValue.cCountry;
  this.employeeValue.pZipCode=this.employeeValue.cZipCode;
  this.employeeValue.pState=this.employeeValue.cState;
  
}
}

  changePage() {

    this.pageEvent.emit(this.currentpage = 4)
    this.page.emit(this.employeeValue);
  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 2)
 this.page.emit(this.employeeValue);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.employeeValue);
  }

}