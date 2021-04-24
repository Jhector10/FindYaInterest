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
import { AccountSidebarComponent } from './account-sidebar/account-sidebar.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { MoreInterestsComponent } from './main-display/more-interests/more-interests.component';
import { MoreCoursesComponent } from './main-display/more-courses/more-courses.component';
import { MA227Component } from './message-board/MA227/MA227.component';
import { E344Component } from './message-board/E344/E344.component';
import { CS545Component } from './message-board/CS545/CS545.component';
import { E234Component } from './message-board/E234/E234.component';
import { CS115Component } from './message-board/CS115/CS115.component';
import { HSS200Component } from './message-board/HSS200/HSS200.component';
import { CS546Component } from './message-board/CS546/CS546.component';
import { EM578Component } from './message-board/EM578/EM578.component';
import { MCATComponent } from './message-board/MCAT/MCAT.component';
import { CFAComponent } from './message-board/CFA/CFA.component';
import { PaintComponent } from './message-board/Paint/Paint.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginPageComponent,
    ForgotLoginPageComponent,
    CreateRoomComponent,
    AccountSidebarComponent,
    MainDisplayComponent,
    MoreInterestsComponent,
    MoreCoursesComponent,
    MA227Component,
    E344Component,
    CS545Component,
    E234Component,
    CS115Component,
    HSS200Component,
    CS546Component,
    EM578Component,
    MCATComponent,
    CFAComponent,
    PaintComponent,
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
