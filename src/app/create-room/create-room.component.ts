import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import 'jquery';
import * as $ from "jquery";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css', '../main-display/more-courses/more-courses.component.css'], 
  encapsulation: ViewEncapsulation.None, 
})

export class CreateRoomComponent implements OnInit {

  constructor(public router: Router){
  }
  
  createRoomForm = new FormGroup(
    { roomType: new FormControl(['']),
      roomName: new FormControl(''),
      description: new FormControl(''),
      url: new FormControl(''),
    //Separate FormGroups for specific room types
    courseRoom: new FormGroup ({ //Course room group
      professor: new FormControl(''),
      courseNum: new FormControl(''),
  }),

    interestRoom: new FormGroup ({ //Interest room group 
      interests: new FormControl(''),
  }),

  
});

  
  ngOnInit(): void{ 
    $(document).ready(function(){
      $("#room-type").change(function(){
        $(this).find("option:selected").each(function(){
              let optionValue = $(this).attr("value");
              if(optionValue){
                $(".specific-room").not("." + optionValue).hide();
                $("." + optionValue).show();
              } else{
                $(".specific-room").hide();
              }
          });
      }).change();
  });
}

  submitted = false;

  onSubmit() { 
    document.getElementById('extra').style.display = 'block';
    window.location.assign('src/app/main-display/more-courses/more-courses.component.html');
    this.submitted = true;}

}
