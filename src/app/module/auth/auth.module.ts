import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { TranslatePipe } from "@ngx-translate/core";
import {LoginAuthComponent} from "./pages/login/login.auth.component";
import {RegisterAuthComponent} from "./pages/register/register.auth.component";
import {ForgotPasswordAuthComponent} from "./pages/forgot-password/forgot-password.auth.component";
import {AuthFormComponent} from "./shared/components/auth-form/auth-form.component";
import {AuthInputComponent} from "./shared/components/auth-input/auth-input.component";
import {AuthButtonComponent} from "./shared/components/auth-button/auth-button.component";
import {AuthLinkComponent} from "./shared/components/auth-link/auth-link.component";
import {NewPasswordAuthComponent} from "./pages/new-password/new-password.auth.component";


@NgModule({
  declarations: [
    LoginAuthComponent,
    RegisterAuthComponent,
    ForgotPasswordAuthComponent,
    NewPasswordAuthComponent,
    AuthFormComponent,
    AuthInputComponent,
    AuthButtonComponent,
    AuthLinkComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TranslatePipe
  ]
})
export class AuthModule { }
