import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/courses/course/course.component';
import { CourseChildComponent } from './components/courses/course-child/course-child.component';
import { StudentComponent } from './components/students/student/student.component';
import { StudentChildComponent } from './components/students/student-child/student-child.component';
import { InstructorComponent } from './components/instructors/instructor/instructor.component';
import { InstructorChildComponent } from './components/instructors/instructor-child/instructor-child.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseChildComponent,
    StudentComponent,
    StudentChildComponent,
    InstructorComponent,
    InstructorChildComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
