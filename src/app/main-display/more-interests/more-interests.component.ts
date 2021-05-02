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

  filterRooms()
  {
    var input = (<HTMLInputElement>document.getElementById('searchBar')).value;
    input = input.toLowerCase();
    var list = document.getElementsByClassName("interest-card") as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < list.length; i++)
    {
      var room = list[i].getElementsByClassName('room-name')[0];
      if (room.innerHTML.toLowerCase().includes(input))
      {
        list[i].style.display = '';
      }
      else
      {
        list[i].style.display = 'none';
      }
    }
  }

}
