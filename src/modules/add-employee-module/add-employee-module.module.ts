import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddressDetailsComponent } from './add-employee/address-details/address-details.component';
import { WorkDetailsComponent } from './add-employee/work-details/work-details.component';
import { PersonalDetailsComponent } from './add-employee/personal-details/personal-details.component';
import { AccessDetailsComponent } from './add-employee/access-details/access-details.component';

// import { AccessDetailsComponent } from './add-employee/access-details/access-details.component';
import {PanelModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MultiSelectModule} from 'primeng/multiselect';
// import {SelectItem} from 'primeng/api';
@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    PanelModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    
  ],
  declarations: [AddEmployeeComponent,
      AddressDetailsComponent,
      WorkDetailsComponent,
      PersonalDetailsComponent]
  
})
export class AddEmployeeModuleModule { }
