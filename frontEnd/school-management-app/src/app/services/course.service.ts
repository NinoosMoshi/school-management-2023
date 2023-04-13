import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

     // http://localhost:8082/courses/all-courses?page=0&size=5
     public getCourseList(page:number, size:number):Observable<GetResponse>{
      return this.http.get<GetResponse>(`${environment.backendHost}/courses/all-courses?page=${page}&size=${size}`).pipe(
        map(response => response)
      )
    }


     // http://localhost:8082/courses/search?keyword=co&page=0&size=5
     public searchCourses(keyword:string, page:number, size:number):Observable<GetResponse>{
        return this.http.get<GetResponse>(`${environment.backendHost}/courses/search?keyword=${keyword}&page=${page}&size=${size}`).pipe(
          map(response => response)
        )
      }



     // http://localhost:8082/courses/delete/{courseId}
     public deleteCourse(course:Course):Observable<any>{
        return this.http.delete<void>(`${environment.backendHost}/courses/delete/${course.courseId}`);
      }



}


interface GetResponse{
  content: Course[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}
