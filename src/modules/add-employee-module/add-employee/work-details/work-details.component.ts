import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../../app/dashboard/shared/employee.interface';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  @Input() employeeValue: Employee;
  @Input() Currentpage: number;
  expDepartment: any;
  primaryskill: any;
  status: any;
  billiable: any;
  public currentpage: number;
  @Output() pageEvent = new EventEmitter<number>();
  constructor() {
    this.expDepartment = [];
    this.expDepartment.push({ label: 'UI Designing', value: 'UI Designing' });
    this.expDepartment.push({ label: 'Testing', value: 'Testing' });
    // this.department.push({label:'Utilization', value:{id:1, name: 'Utilization', code: 'UTI'}});

    this.primaryskill = [];
    this.primaryskill.push({ label: 'Java', value: 'Java' });
    this.primaryskill.push({ label: 'UI', value: 'UI' });

    this.status = [];
    this.status.push({ label: 'ok', value: 'ok' });
  }
  changePage() {
    this.pageEvent.emit((this.currentpage = 2));
  }
  prevPage() {
    this.pageEvent.emit((this.currentpage = 0));
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
        panNo: 0,
        phoneNum: 0,
        adharNo: 0,
        maritalStatus: '',
        anniversaryDate: new Date()
      };
    }
  }
}
