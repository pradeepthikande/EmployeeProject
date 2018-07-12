import { Component, OnInit, Input } from '@angular/core';

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

  @Input() employee: Employee;

  // firstName=this.employee.firstName;
  // lastName=this.employee.lastName;
  // sno=this.employee.sno;

  //  firstName;
  //  lastName;
  constructor() { }
  userForm: FormGroup;
  submitted: boolean;
  ngOnInit() {
    // this.userForm = new FormGroup({
    //   cAddress: new FormControl('', [<any>Validators.required]),

    //   cCountry: new FormControl('', [<any>Validators.required]),

    //   cState: new FormControl('', [<any>Validators.required]),

    //   cCity: new FormControl('', [<any>Validators.required]),

    //   cZipCode: new FormControl('', [<any>Validators.required])
    // })

  }

  //  onSubmit({ value, valid }: { value: userForm, valid: boolean }) {
  //   this.submitted = true;
  //   console.log(value,valid);

  // }
}