import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-login-page',
  templateUrl: './forgot-login-page.component.html',
  styleUrls: ['./forgot-login-page.component.css']
})
export class ForgotLoginPageComponent implements OnInit {


  constructor(public auth: AuthService) {
   }

  ngOnInit(): void {
  }
  
  
}
