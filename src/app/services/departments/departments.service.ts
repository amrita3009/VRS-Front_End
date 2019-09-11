import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(private http: HttpClient) { }
  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`https://localhost:44398/api/departments`);
  }
  public addDepartment(name: String): Observable<Department[]> {
    console.log("API call",name)
    return this.http.post<Department[]>(`https://localhost:44398/api/departments`, JSON.stringify({value: name}));
  }
  public editDepartment(id: Number, name: String): Observable<Department[]> {
    return this.http.post<Department[]>(`https://localhost:44398/api/departments/${id}`,{'deptName': name});
  }
  public deleteDepartment(id: Number): Observable<Department[]> {
    return this.http.delete<Department[]>(`https://localhost:44398/api/departments/${id}`);
  }
}
