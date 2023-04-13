import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  showCourseModal(){
    $('#courseModal').modal('show');
  }

}
