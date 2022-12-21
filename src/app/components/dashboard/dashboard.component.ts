import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import employeeData from '../../../assets/employee.json'

// interface Employee{
// id: Number;  
// name: String;  
// deparment: String;  
// gender: String; 
// salary:String; 
// StartDate:String;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee:any=[];

  // name = 'Angular'; 
  // employee:Employee[]=employeeData;

  constructor(private http:HttpClient) { 
    // console.log(this.employee)
  }
  
  ngOnInit(): void {
    this.http.get("assets/employee.json").subscribe(data=>{
      console.log(data);
      this.employee=data;
    })
  }
 
}
