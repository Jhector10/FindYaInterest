import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotLoginPageComponent } from './forgot-login-page/forgot-login-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginPageComponent,
    ForgotLoginPageComponent,
    CreateRoomComponent,
    AccountSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
