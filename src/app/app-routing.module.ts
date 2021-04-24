import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ForgotLoginPageComponent } from './forgot-login-page/forgot-login-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
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

const routes: Routes = [
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'create-room', component: CreateRoomComponent},
  {path: 'forgot-login-page', component: ForgotLoginPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'account-sidebar', component: AccountSidebarComponent},
  {path: '', component: MainDisplayComponent},
  {path: 'more-interests', component: MoreInterestsComponent},
  {path: 'more-courses', component: MoreCoursesComponent},
  {path: 'message-boards/MA227', component: MA227Component},
  {path: 'message-boards/E344', component: E344Component},
  {path: 'message-boards/CS545', component: CS545Component},
  {path: 'message-boards/E234', component: E234Component},
  {path: 'message-boards/CS115', component: CS115Component},
  {path: 'message-boards/HSS200', component: HSS200Component},
  {path: 'message-boards/CS546', component: CS546Component},
  {path: 'message-boards/EM578', component: EM578Component},
  {path: 'message-boards/MCAT', component: MCATComponent},
  {path: 'message-boards/CFA', component: CFAComponent},
  {path: 'message-boards/Paint', component: PaintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
