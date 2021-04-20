import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ForgotLoginPageComponent } from './forgot-login-page/forgot-login-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { MainDisplayComponent } from './main-display/main-display.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'forgot-login-page', component: ForgotLoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'account-sidebar', component: AccountSidebarComponent },
  { path: '', component: MainDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
