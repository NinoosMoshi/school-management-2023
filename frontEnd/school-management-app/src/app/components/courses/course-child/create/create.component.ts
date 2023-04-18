import { InstructorService } from './../../../../services/instructor.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CourseService } from 'src/app/services/course.service';

declare var $:any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  parentFormGroup: FormGroup;
  instructors: Instructor[] = [];

  course:Course = new Course;


  constructor(private childFormGroup: FormBuilder,
              private instructorService: InstructorService,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.myForm();
    this.getAllInstructor();
  }



  myForm(){
    this.parentFormGroup = this.childFormGroup.group({
      data:this.childFormGroup.group({
        courseName: ["", Validators.required],
        courseDuration: ["", Validators.required],
        courseDescription: ["", Validators.required],
        instructor: [null, Validators.required]
      })

    })
  }

  get courseName(){
    return this.parentFormGroup.get('data.courseName');
  }

  get courseDuration(){
    return this.parentFormGroup.get('data.courseDuration');
  }

  get courseDescription(){
    return this.parentFormGroup.get('data.courseDescription');
  }

  get instructor(){
    return this.parentFormGroup.get('data.instructor');
  }


  getAllInstructor(){
    this.instructorService.getInstructorList().subscribe({
      next: response =>{
        this.instructors = response
      },
      error: err =>{
        alert(err.message)
      }
    })
  }



  formSubmit(){
    if(this.parentFormGroup.invalid){
      this.parentFormGroup.markAllAsTouched();
    }
    else{
      let employeeData = this.parentFormGroup.controls['data'].value;
      this.course = employeeData

      this.courseService.createCourse(this.course).subscribe({
        next: data =>{
          $('#courseModal').modal('hide');
           this.parentFormGroup.reset();
           window.location.reload();
        },
        error: err =>{

        }
      })

    }
  }



  showCourseModal(){
    $('#courseModal').modal('show');
  }

}
