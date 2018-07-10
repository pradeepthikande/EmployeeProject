import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './login/forgot/forgot.component'

const routes: Routes = [
    {
        path: "", component: LoginComponent},
       {  path: 'forgot', component: ForgotComponent }
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
export const routingComponents = [LoginComponent, ForgotComponent];