import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddressDetailsComponent } from './add-employee/address-details/address-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddEmployeeComponent, AddressDetailsComponent]
})
export class AddEmployeeModuleModule { }
