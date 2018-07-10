import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowEmpComponent } from './shadow-emp/shadow-emp.component';
import { BenchEmpComponent } from './bench-emp/bench-emp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShadowEmpComponent, BenchEmpComponent]
})
export class SharedModuleModule { }
