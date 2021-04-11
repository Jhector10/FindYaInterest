import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotLoginPageComponent } from './forgot-login-page/forgot-login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: CreateAccountComponent},
  { path: 'forgot', component: ForgotLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
