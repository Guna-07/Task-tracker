import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbtasksService {
  private url= 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]>{
      return this.http.get<any[]>(this.url);
  }

  
}
