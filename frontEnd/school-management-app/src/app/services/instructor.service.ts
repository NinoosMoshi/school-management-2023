import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../model/instructor';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http:HttpClient) { }


  // http://localhost:8082/instructors/all
  public getInstructorList():Observable<Instructor[]>{
    return this.http.get<Instructor[]>(`${environment.backendHost}/instructors/all`).pipe(
      map(response => response)
    )
  }


}
