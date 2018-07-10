import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
dashboard;
  selectedDashboard: string;
  constructor() {
    this.dashboard = [];
    this.dashboard.push({label:'Employees', value:{id:1, name: 'Employees', code: 'EMP'}});
    this.dashboard.push({label:'Utilization', value:{id:1, name: 'Utilization', code: 'UTI'}});
  }

  ngOnInit() {}
}
