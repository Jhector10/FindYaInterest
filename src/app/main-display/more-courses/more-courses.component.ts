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

}
