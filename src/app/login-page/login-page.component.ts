import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  UserName: string;
  Password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() { 
    if (this.UserName === "fyi" && this.Password === "fyi") {
      this.router.navigateByUrl('/home');
    }
    else { 
      alert('Wrong Username or Password');
    }
  }

}
