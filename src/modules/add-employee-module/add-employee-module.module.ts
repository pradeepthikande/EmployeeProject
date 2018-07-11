import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddressDetailsComponent } from './add-employee/address-details/address-details.component';
import { WorkDetailsComponent } from './add-employee/work-details/work-details.component';
import { PersonalDetailsComponent } from './add-employee/personal-details/personal-details.component';
// import { AccessDetailsComponent } from './add-employee/access-details/access-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddEmployeeComponent, AddressDetailsComponent, WorkDetailsComponent, PersonalDetailsComponent, ]
})
export class AddEmployeeModuleModule { }
