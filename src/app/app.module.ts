import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotLoginPageComponent } from './forgot-login-page/forgot-login-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginPageComponent,
    ForgotLoginPageComponent,
    CreateRoomComponent,
  ],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCLN4xri6hsV1PVQ0nFiGfHzBjzIwURRW4",
      authDomain: "findyainterest.firebaseapp.com",
      projectId: "findyainterest",
      storageBucket: "findyainterest.appspot.com",
      messagingSenderId: "741107814963",
      appId: "1:741107814963:web:1bfd272c96d848e3b9c946"
    }),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
