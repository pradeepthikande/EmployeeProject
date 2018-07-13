// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Component,OnChanges, SimpleChanges,OnInit,Input , EventEmitter,Output} from '@angular/core';
import { Employee } from '../../../../app/dashboard/shared/employee.interface';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit,OnChanges {
  @Input() employeeValue: Employee;

   currentpage: number = 0;
  
  @Output() pageEvent = new EventEmitter<number>();

  @Output() page = new EventEmitter<Employee>();
  selectedDepartment: string;
  status;

  // visible = false;
  // emp: Employee[];

  // show(i) {
  //   this.visible = true;
  //   this.employeeValue = this.emp[i];
  // }
  constructor() {
    this.status = [];
    this.status.push({label:'married', value:'married'});
    this.status.push({label:'unmarried', value:'unmarried'});
  }
  changePage() {

    this.pageEvent.emit(this.currentpage = 3)

  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 1)

  }
  ngOnInit() {
    debugger;
   
    if(this.employeeValue===undefined){
     this.employeeValue= {
    sno: '',
    firstName: '',
    lastName: '',
    emailId: '',
    expDepartment: '',
    primarySkill: '',
    status: '',
    billable: false,
    expJoinDate: new Date,
    expSeparatedDate:new Date ,
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
    roles: '',
    bloodGroup:'',
    panNo:0,
    adharNo:0,
    phoneNum:0,
    maritalStatus:'',
    anniversaryDate:new Date


  }
    
}

}
ngOnChanges(changes: SimpleChanges){
  console.log(this.employeeValue);
}
}