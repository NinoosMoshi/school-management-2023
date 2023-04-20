import { InstructorService } from './../../../services/instructor.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/model/instructor';
import { DeleteInstructorComponent } from '../instructor-child/delete-instructor/delete-instructor.component';
import { CreateInstructorComponent } from '../instructor-child/create-instructor/create-instructor.component';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  @ViewChild(CreateInstructorComponent) createInstructorComponent:CreateInstructorComponent;
  @ViewChild(DeleteInstructorComponent) deleteInstructorComponent:DeleteInstructorComponent;

  instructors:Instructor[] = [];
  selectedInstructor:Instructor = new Instructor;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;



  constructor(private instructorService: InstructorService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.listInstructor();
    })
  }


  listInstructor(){
    let searchMode = this.route.snapshot.paramMap.has('keyword');

    if(searchMode){
      this.handleSearchInstructor();
    }
    else{
      this.handleListInstructors();
    }
    }


  handleListInstructors(){
    this.instructorService.getAllInstructorsPagination(this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.instructors = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error: err =>{
        alert('there is an error occure ' + err.message)
      }
    })
  }


  handleSearchInstructor(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.instructorService.searchInstructors(theKeyword, this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.instructors = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error: err =>{
        alert('there is an error occure ' + err.message)
      }
    })
  }

  doSearch(value:string){
    this.router.navigateByUrl(`/instructor/${value}`)
  }


  handleCreateInstructor(){
    this.createInstructorComponent.showInstructorModal();
  }


  handleDeleteInstructor(temp:Instructor){
     this.selectedInstructor = temp;
     this.deleteInstructorComponent.showDeleteInstructorModal();
  }



  handleEditInstructor(temp:Instructor){

  }


  deleteInstructorTemp(){
    let itemIndex = this.instructors.findIndex(item => item.instructorId === this.selectedInstructor.instructorId);

    this.instructorService.deleteInstructor(this.selectedInstructor).subscribe({
      next: response =>{
        this.instructors.splice(itemIndex, 1);
        this.listInstructor();
      },
      error: err =>{

      }
    })
  }




}
