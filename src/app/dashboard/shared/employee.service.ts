
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from "./employee.interface";
//import {Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }
  getEmployee() {
        return this.http.get('/employee.json')
                    .toPromise()
                    .then(res => <Employee[]> res)
                    .then(data => { return data });
    }
}
