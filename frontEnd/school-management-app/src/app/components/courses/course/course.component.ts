import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';
import { CreateComponent } from '../course-child/create/create.component';
import { DeleteComponent } from '../course-child/delete/delete.component';
import { UpdateComponent } from '../course-child/update/update.component';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @ViewChild(CreateComponent) createComponent:CreateComponent;
  @ViewChild(UpdateComponent) updateComponent:UpdateComponent;
  @ViewChild(DeleteComponent) deleteComponent:DeleteComponent;

  courses: Course[] = [];
  selectedCourse:Course = new Course;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;



  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.listCourses();
    })

  }

  listCourses(){
    let searchMode = this.route.snapshot.paramMap.has('keyword');

    if(searchMode){
      this.handleSearchCourses();
    }
    else{
      this.handleListCourses();
    }
    }


  handleListCourses(){
    this.courseService.getCourseList(this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.courses = response.content;
        this.thePageNumber = response.number + 1;
        this.thePageSize = response.size;
        this.theTotalElements = response.totalElements;
      },
      error: err =>{
        alert('there is an error occure ' + err.message)
      }
    })
  }


  handleSearchCourses(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.courseService.searchCourses(theKeyword, this.thePageNumber - 1, this.thePageSize).subscribe({
      next: response =>{
        this.courses = response.content;
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
    this.router.navigateByUrl(`/course/${value}`)
  }




  deleteCourseTemp(){
    let itemIndex = this.courses.findIndex(item => item.courseId === this.selectedCourse.courseId);

    this.courseService.deleteCourse(this.selectedCourse).subscribe({
      next: response =>{
        this.courses.splice(itemIndex, 1);
        this.listCourses();
      },
      error: err =>{

      }
    })

  }



  handleCreateCourse(){
    this.createComponent.showCourseModal();
  }

  handleEditCourse(temp:Course){
     this.selectedCourse = Object.assign({}, temp);
     this.updateComponent.showEditModal();

  }


  handleDeleteCourse(temp:Course){
    this.selectedCourse = temp;
    this.deleteComponent.showDeleteModal();
  }




}
