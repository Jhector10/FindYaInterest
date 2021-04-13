import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  Email: string;
  Password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() { 
    if (this.Email != '\uf8ff' + '@gmail.com') {
      alert('Please enter a valid google email address');
    } if (this.Password.length < 6) {
      alert('Please enter a Password that is more than 6 characters long');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
