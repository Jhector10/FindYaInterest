import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {

  constructor(public router: Router){
  }
  ngOnInit(): void {
  }

  logoPress(link)
  {
    location.href = link;
    //alert(); <-- this line prevents an href to the message board
  }
  
}
