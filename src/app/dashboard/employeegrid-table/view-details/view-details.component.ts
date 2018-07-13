import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
@Input() employeeDetails:any;
@Input() visible:boolean;

     counter: number = 0;
     currentpage=0;

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

  constructor() {}
    
   

  ngOnInit() {
  }

}
