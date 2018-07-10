import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import{DashboardComponent} from './dashboard/dashboard.component';
// import{AddEmployeeComponent} from '../modules/add-employee-module/add-employee/add-employee.component'

const routes: Routes = [
    { path: "", component: LoginComponent},
    { path: 'forgot', component: ForgotComponent },
    {path:'dashbord',component:DashboardComponent},
    // {path:'addEmployee',component:AddEmployeeComponent}
        ]
    



@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { };
export const routingComponents = [LoginComponent, ForgotComponent,DashboardComponent];