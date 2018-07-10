import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// import { ForgotComponent } from './login/forgot/forgot.component';
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
// import { ForgotComponent } from './login/forgot/forgot.component';
// import{ LoginComponent } from './login/login.component';

// import { LoginComponent } from './login/login.component';

import { CheckboxModule } from 'primeng/primeng';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ButtonModule } from 'primeng/primeng';


import { CommonModule } from '@angular/common';
// import { ShadowEmpComponent } from '../../modules/shared-module/shadow-emp';
import { ShadowEmpComponent} from "../modules/shared-module/shadow-emp/shadow-emp.component";
@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // ForgotComponent,
    routingComponents,
    DashboardComponent,
    EmployeegridComponent,
    SidemenuComponent,
    HeaderComponent,
    EmployeegridTableComponent,
    ShadowEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule,
    HttpModule,
    // routingComponents,
    CheckboxModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [EmployeeService,
    HttpModule,
    // CheckboxModule,
    // AppRoutingModule,
    // ButtonModule,
    HttpClientModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
