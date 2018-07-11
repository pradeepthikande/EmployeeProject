import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
//import {Http, Response} from '@angular/http';
// import { Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

    // getEmployee() : Observable<any> {
    //   return this.http
    //     .get('assets/employee.json')
    //     .map(res => function(){
    //       let body = res.json();
    //       return body.data || body;
    //     })
    // }

  getEmployee() {
    return this.http
      .get('assets/employee.json')
      .toPromise()
      .then(function(res) {
        console.log(res);
        return <Employee[]>res;
      });
  }
  getStatus(count){
    count++;
    return count;
  }

}
