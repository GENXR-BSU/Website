import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesGuard } from 'src/services.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{component: LoginComponent, path: 'login'}, 
                        {component: SignupComponent, path: 'signup'},
                        {component: MainComponent, path: 'main', canActivate: [ServicesGuard]},
                        {path: '', redirectTo: 'login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
