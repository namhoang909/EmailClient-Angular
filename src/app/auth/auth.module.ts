import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { SignOutComponent } from './sign-out/sign-out.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, SignOutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule,
  ]
})
export class AuthModule { }
