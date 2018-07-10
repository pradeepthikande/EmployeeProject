import { BrowserModule } from '@angular/platform-browser';
import { NgModule, VERSION } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ForgotComponent } from './forgot/forgot.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { EmployeegridComponent } from './dashboard/employeegrid/employeegrid.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    EmployeegridComponent,  BrowserAnimationsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
