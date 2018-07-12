import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
 visible=false;
   counter: number = 0;
   
   onClick() {
      this.counter++;
      this.visible=!this.visible;
   }
  constructor() { }

  ngOnInit() {
  }

}
