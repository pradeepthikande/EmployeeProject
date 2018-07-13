import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() personal: any;
  selectedDepartment: string;
  department;

  public currentpage: number;
  @Output() pageEvent = new EventEmitter<number>()
  constructor() {
    this.department = [];
    this.department.push({ label: 'Employees', value: { id: 1, name: 'Employees', code: 'EMP' } });
    this.department.push({ label: 'Utilization', value: { id: 1, name: 'Utilization', code: 'UTI' } });
  }
  changePage() {

    this.pageEvent.emit(this.currentpage = 3)

  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 1)

  }
  ngOnInit() {
  }

}
