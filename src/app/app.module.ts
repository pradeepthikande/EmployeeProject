import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployeegridComponent } from './dashboard/employeegrid/employeegrid.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { EmployeegridTableComponent } from './dashboard/employeegrid-table/employeegrid-table.component';
import {TableModule} from 'primeng/table';
import {EmployeeService} from "./dashboard/shared/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    DashboardComponent,
    EmployeegridComponent,
    SidemenuComponent,
    HeaderComponent,
    EmployeegridTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule,
    HttpModule
  ],
  
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
