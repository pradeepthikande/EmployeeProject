import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
import { Employee } from '../../../app/dashboard/shared/employee.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnChanges {
  @Input() employeeValue: Employee
  currentpage: number = 0;
  
  @Output() pageEvent = new EventEmitter<number>();

  @Output() page = new EventEmitter<Employee>();
  userForm: FormGroup;


  changePage() {
    this.pageEvent.emit(this.currentpage = 1);
    // this.pageEvent.emit(this.employeeValue);
    // console.log(this.employeeValue)
    // this.pageEvent.emit(this.employeeValue);
     this.page.emit(this.employeeValue);

  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({

      firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      lastName: ['', [<any>Validators.required]],
      emailId: ['', [<any>Validators.required]]

    })


    if (this.employeeValue === undefined) {
      this.employeeValue = {
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


      }

    }

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.employeeValue);
  }
}
