import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/interface/employee';
import { EmployeeRequestModel } from 'src/interface/employeeRequestModel';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  id:number=0;
  employee:Employee ={
    firstName: '',
    lastName:'',
    city:'',
    title:'',
    hireDate:new Date(),
    birthDate:new Date(),
    region:0,
    reportsTo:0,
    titleOfCourtesy:'',
    regionName:'',
    fullName:'',
    id:0
  }

  employeeReqeustModel : EmployeeRequestModel = {
    id:0,
    firstName: '',
    lastName:'',
    title:'',
    titleOfCourtesy:'',
    birthDate:new Date(),
    hireDate:new Date(),
    address:'',
    city:'',
    regionId:0,
    postalCode:0,
    country:'',
    phone:'',
    reportsTo:0,
    photoPath:''
  }

  isSuccessful:boolean=false;
  

  constructor(private activatedRoute:ActivatedRoute, private empService:EmployeeService) { 
    activatedRoute.params.subscribe(d=>{
    this.id=  d["id"]
    })
  }

  ngOnInit(): void {
  }
 setData(ngForm:NgForm){
  this.empService.getEmpById(this.id).subscribe(d=>{
    this.employee=d;
  })
 ngForm.setValue(this.employee)
 
}
editEmployee(ngForm:NgForm)
{
  // this.employee= ngForm.value;

  this.employeeReqeustModel.id = this.employee.id;
  this.employeeReqeustModel.firstName = ngForm.value.firstName;
  this.employeeReqeustModel.lastName = ngForm.value.lastName;
  this.employeeReqeustModel.city = ngForm.value.city;
  this.employeeReqeustModel.title = ngForm.value.title;
  this.employeeReqeustModel.titleOfCourtesy = ngForm.value.titleOfCourtesy;
  this.employeeReqeustModel.hireDate = ngForm.value.hireDate;
  this.employeeReqeustModel.birthDate = ngForm.value.birthDate;
  this.employeeReqeustModel.reportsTo = ngForm.value.reportsTo;

  this.empService.updateEmployee(this.employee).subscribe(d=>{
    this.isSuccessful=true;
  });
}

}
