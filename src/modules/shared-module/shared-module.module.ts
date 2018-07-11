import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowEmpComponent } from './shadow-emp/shadow-emp.component';
import { BenchEmpComponent } from './bench-emp/bench-emp.component';
import { NonBillableEmpComponent } from "./non-billable-emp/non-billable-emp.component";
import { TotalEmployeesComponent } from './total-employees/total-employees.component';
import { EmployeeService} from '../../app/dashboard/shared/employee.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShadowEmpComponent, BenchEmpComponent, NonBillableEmpComponent, TotalEmployeesComponent],
  providers: [
     EmployeeService
  ],
 
})
export class SharedModuleModule { }
