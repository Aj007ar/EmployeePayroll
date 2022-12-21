import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  addEmployee(payload:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'assets/employee.json'
      })
    }
    return this.httpService.postService("C:\Users\LENOVO\Desktop\Employee Payroll\EmployeePayroll\src\assets\employee.json",payload, false, header)
  }
}
