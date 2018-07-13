import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../app/dashboard/shared/employee.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() employeeValue: Employee
  currentpage: number = 0;
  @Output() pageEvent = new EventEmitter<number>()
  userForm: FormGroup;
  changePage() {
    this.pageEvent.emit(this.currentpage = 1)

  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      firstName: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      lastName: ['', [<any>Validators.required]],
      emailId: ['', [<any>Validators.required]]
    })
  }
}
