import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/model/course';
import { Instructor } from 'src/app/model/instructor';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

declare var $:any;


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() updateData:Course;


  instructors: Instructor[] = [];

  defaultInstructor: Instructor;

  parentFormGroup: FormGroup;



  constructor(private childFormGroup: FormBuilder, private instructorService: InstructorService,private courseService:CourseService) { }

  ngOnInit(): void {
    this.myForm();
    this.getAllInstructor();

  }


  myForm(){
    this.parentFormGroup = this.childFormGroup.group({
      data:this.childFormGroup.group({
        courseName: [this.updateData.courseName, Validators.required],
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



  formSubmit(){
    if(this.parentFormGroup.invalid){
      this.parentFormGroup.markAllAsTouched();
    }
    else{

    }

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





  showEditModal(){
    $('#editModal').modal('show');

  }




}
