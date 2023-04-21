import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/courses/course/course.component';
import { StudentComponent } from './components/students/student/student.component';
import { InstructorComponent } from './components/instructors/instructor/instructor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/courses/course-child/create/create.component';
import { DeleteComponent } from './components/courses/course-child/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/courses/course-child/update/update.component';
import { UpdateInstructorComponent } from './components/instructors/instructor-child/update-instructor/update-instructor.component';
import { DeleteInstructorComponent } from './components/instructors/instructor-child/delete-instructor/delete-instructor.component';
import { CreateInstructorComponent } from './components/instructors/instructor-child/create-instructor/create-instructor.component';
import { CoursesInstructorComponent } from './components/instructors/instructor-child/courses-instructor/courses-instructor.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    StudentComponent,
    InstructorComponent,
    NavbarComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    UpdateInstructorComponent,
    DeleteInstructorComponent,
    CreateInstructorComponent,
    CoursesInstructorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
