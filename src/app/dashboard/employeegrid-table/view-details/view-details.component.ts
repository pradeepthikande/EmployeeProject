import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
@Input() employeeDetails:any;
@Input() visible:boolean;
 
    //  visible=false;
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


private test:{BloodGroup:string,PhoneNo:number,AadharNo:number,PanNo:number};
  constructor() {
    this.test={
      BloodGroup:'A',
      PhoneNo:1234567891,
      AadharNo:70608090,
      PanNo:2233445566
    }
   }

  ngOnInit() {
  }

}
