import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../../../../app/dashboard/shared/employee.interface';
@Component({
  selector: 'app-access-details',
  templateUrl: './access-details.component.html',
  styleUrls: ['./access-details.component.css']
})
export class AccessDetailsComponent implements OnInit {
  roles: SelectItem[];
  selectedRoles: string[] = [];

  public currentpage: number;
  @Input() employeeValue: Employee;
  @Output() pageEvent = new EventEmitter<number>()


  @Output() page = new EventEmitter<Employee>();
  prevPage() {
    this.pageEvent.emit(this.currentpage = 3)

  }
  save() {

    this.page.emit(this.employeeValue);

  }
  constructor() {
    this.roles = [];
    this.roles.push({ label: 'Admin', value: 'Admin' });
    this.roles.push({ label: 'Employee', value: 'Employee' });
    this.roles.push({ label: 'Hr manager', value: 'Hr manager' });
    this.roles.push({ label: 'Developer', value: 'Developer' });
    this.roles.push({ label: 'Tester', value: 'Tester' });
    this.roles.push({ label: 'Ui-Developer', value: 'Ui-Developer' });
  }


  ngOnInit() {


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
        roles: []


      }

    }
  }

}
