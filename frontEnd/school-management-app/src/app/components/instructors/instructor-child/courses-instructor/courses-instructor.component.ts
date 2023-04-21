import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CourseService } from 'src/app/services/course.service';

declare var $:any;

@Component({
  selector: 'app-courses-instructor',
  templateUrl: './courses-instructor.component.html',
  styleUrls: ['./courses-instructor.component.css']
})
export class CoursesInstructorComponent implements OnInit {

  @Input() instructorObject:Instructor;

  courses:Course[] = [];

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.getCoursesByInstructor();
  }


  getCoursesByInstructor(){

    let instrucorId = this.instructorObject.instructorId;


    this.courseService.getCoursesByInstructor(instrucorId,this.thePageNumber - 1, this.thePageSize).subscribe({
      next:response =>{
        this.courses = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error:err =>{

      }
    })
  }



  showCoursesInstructorModal(){
    $('#courseInstructorModal').modal('show');
  }



}
