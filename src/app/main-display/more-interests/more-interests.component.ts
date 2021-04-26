import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-interests',
  templateUrl: './more-interests.component.html',
  styleUrls: ['./more-interests.component.css']
})
export class MoreInterestsComponent implements OnInit {

  constructor(public router: Router){
  }

  ngOnInit(): void{

  }

  logoPress(link)
  {
    location.href = link;
    //alert(); <-- this line prevents an href to the message board
  }

}
