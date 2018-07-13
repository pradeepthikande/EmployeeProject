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

  @Output() pageEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    debugger;
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
  onNextPageClick() {

  }
  changePage() {

    this.pageEvent.emit(this.currentpage = 4)

  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 2)

  }

}