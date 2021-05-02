import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-courses',
  templateUrl: './more-courses.component.html',
  styleUrls: ['./more-courses.component.css']
})
export class MoreCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    var list = document.getElementsByClassName("course-card") as HTMLCollectionOf<HTMLElement>;

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
