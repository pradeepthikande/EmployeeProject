import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
export class AddressDetailsComponent implements OnInit {

  @Input() sravani: Employee;


  public currentpage: number;

  @Output() pageEvent = new EventEmitter<number>();

  @Output() page = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit() {
    // debugger;
    if (this.sravani == undefined) {
      this.sravani = {
        sno: ' ',
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
        roles: ''
      };
    }


    console.log(this.sravani);

  }


changeAddress(){
  this.sravani.checking==true;

if(this.sravani.checking = true){
  this.sravani.pAddress=this.sravani.cAddress;
  this.sravani.pCity=this.sravani.cCity;
  this.sravani.pCountry=this.sravani.cCountry;
  this.sravani.pZipCode=this.sravani.cZipCode;
  this.sravani.pState=this.sravani.cState;
  
}
}

  changePage() {

    this.pageEvent.emit(this.currentpage = 4)
    this.page.emit(this.sravani);
  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 2)
 this.page.emit(this.sravani);
  }

}