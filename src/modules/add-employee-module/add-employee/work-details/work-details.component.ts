import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  @Input() Currentpage: number
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

    this.pageEvent.emit(this.currentpage = 2)

  }
  prevPage() {
    this.pageEvent.emit(this.currentpage = 0)

  }


  ngOnInit() {
  }

}
