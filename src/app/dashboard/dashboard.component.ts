import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    visible=false;
    counter: number = 0;
    public currentpage = 0;

   onClick() {
      this.counter++;
      this.visible=!this.visible;
   }




changePage() {
        this.currentpage++;
}


prevPage(){
this.currentpage--
}

  constructor() { }

  ngOnInit() {
  }
}
