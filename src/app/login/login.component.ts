import { Component, OnInit } from '@angular/core';
import { AppRoutingModule, routingComponents } from '../app.routing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=""

  add(){


this.user="new user login";
console.log("new user logined")

  }
  
  constructor() { }

  ngOnInit() {
 
  }

}
