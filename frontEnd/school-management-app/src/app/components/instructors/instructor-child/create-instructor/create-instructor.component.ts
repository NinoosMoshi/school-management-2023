import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instructor } from 'src/app/model/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

declare var $:any;

@Component({
  selector: 'app-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.css']
})
export class CreateInstructorComponent implements OnInit {

  parentFormGroup: FormGroup;
  instructor:Instructor = new Instructor;

  constructor(private childFormGroup: FormBuilder, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.myForm();
  }


  myForm(){
    this.parentFormGroup = this.childFormGroup.group({
      data:this.childFormGroup.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        summary: ["", Validators.required],
        user:this.childFormGroup.group({
          email: ["",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          password: ["", Validators.required]
        })

      })

    })
  }
///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i

  get firstName(){
    return this.parentFormGroup.get('data.firstName');
  }

  get lastName(){
    return this.parentFormGroup.get('data.lastName');
  }

  get summary(){
    return this.parentFormGroup.get('data.summary');
  }

  get email(){
    return this.parentFormGroup.get('data.user.email');
  }

  get password(){
    return this.parentFormGroup.get('data.user.password');
  }


  formSubmit(){
    if(this.parentFormGroup.invalid){
      this.parentFormGroup.markAllAsTouched();
    }
    else{
      let instructorData = this.parentFormGroup.controls['data'].value;
      this.instructor = instructorData;

      this.instructorService.createInstructor(this.instructor).subscribe({
        next: data =>{
          $('#instructorModal').modal('hide');
           this.parentFormGroup.reset();
           window.location.reload();
        },
        error: err =>{

        }
      })

    }
  }



  showInstructorModal(){
    $('#instructorModal').modal('show');
  }


}
