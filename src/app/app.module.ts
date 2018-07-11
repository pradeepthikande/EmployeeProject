import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployeegridComponent } from './dashboard/employeegrid/employeegrid.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { EmployeegridTableComponent } from './dashboard/employeegrid-table/employeegrid-table.component';
import { TableModule } from 'primeng/table';
import { EmployeeService } from './dashboard/shared/employee.service';
import {DialogModule} from 'primeng/primeng';


import { CheckboxModule } from 'primeng/primeng';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ButtonModule } from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import{AddEmployeeComponent} from '../modules/add-employee-module/add-employee/add-employee.component'
import{AccessDetailsComponent} from '../modules/add-employee-module/add-employee/access-details/access-details.component'
import{AddressDetailsComponent} from '../modules/add-employee-module/add-employee/address-details/address-details.component'
import{PersonalDetailsComponent} from '../modules/add-employee-module/add-employee/personal-details/personal-details.component'
import{WorkDetailsComponent} from '../modules/add-employee-module/add-employee/work-details/work-details.component';
import {CalendarModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';



import { CommonModule } from '@angular/common';
// import { ShadowEmpComponent } from '../../modules/shared-module/shadow-emp';
import { ShadowEmpComponent} from "../modules/shared-module/shadow-emp/shadow-emp.component";
import { BenchEmpComponent} from "../modules/shared-module/bench-emp/bench-emp.component";

import { NonBillableEmpComponent } from "../modules/shared-module/non-billable-emp/non-billable-emp.component";
import { TotalEmployeesComponent } from "../modules/shared-module/total-employees/total-employees.component";
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    EmployeegridComponent,
    SidemenuComponent,
    HeaderComponent,
    EmployeegridTableComponent,
    AddEmployeeComponent,
    AccessDetailsComponent,
    AddressDetailsComponent,
    WorkDetailsComponent,
    PersonalDetailsComponent,
    ShadowEmpComponent,
    BenchEmpComponent,
    NonBillableEmpComponent,
    TotalEmployeesComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule,
    HttpModule,
    CheckboxModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,TabViewModule,
    CalendarModule,
    RadioButtonModule,
    HttpClientModule,
    TabViewModule,
    FieldsetModule
  ],

  providers: [EmployeeService,
    HttpModule,
    HttpClientModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
