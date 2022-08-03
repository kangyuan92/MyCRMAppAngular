import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string= environment.apiKey+environment.apiControllers.employee;
  constructor(private httpClient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.url);
  }
  getEmpById(id:any):Observable<Employee>{
    return this.httpClient.get<Employee>(this.url+"/"+id)
  }

  updateEmployee(employee:Employee):Observable<any>{
    return this.httpClient.put(this.url,employee);
  }
}
