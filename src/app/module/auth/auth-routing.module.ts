import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterAuthComponent} from "./pages/register/register.auth.component";
import {LoginAuthComponent} from "./pages/login/login.auth.component";
import {ForgotPasswordAuthComponent} from "./pages/forgot-password/forgot-password.auth.component";
import {NewPasswordAuthComponent} from "./pages/new-password/new-password.auth.component";

const routes: Routes = [
  {
      path: 'login',
      component: LoginAuthComponent,
  },
  {
    path: 'register',
    component: RegisterAuthComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordAuthComponent
  },
  {
    path: 'new-password',
    component: NewPasswordAuthComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
