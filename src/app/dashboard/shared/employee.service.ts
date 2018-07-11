import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
// import {Http, Response} from '@angular/http';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

    getEmployee() : Observable<any> {
      return this.http.get('assets/employee.json');
        // }));
    }

  // getEmployee() {
  //   return this.http
  //     .get('assets/employee.json')
  //     .toPromise()
  //     .then(function(res) {
  //       console.log(res);
  //       return <Employee[]>res;
  //     });
  // }
  // getStatus(count){
  //   count++;
  //   return count;
  // }

count:number=80;


  // getEmployee() {
  //   return this.http
  //     .get('assets/employee.json')
  //     .toPromise()
  //     .then(function(res) {
  //       // console.log(res);
  //       return <Employee[]>res;
  //     });
  // }
  // getStatus(count){
  //   count++;
  //   return count;
  // }


  getStatus(status){
    if(status==='shadow'){
      return this.count;
    }else if(status==='bench'){
      return this.count=90;
    }
    else if(status==='billable'){
      return this.count=30;
    }else if(status==='total'){
      return this.count=23;
    }else {
      return this.count=0
    }
    
  }
}
