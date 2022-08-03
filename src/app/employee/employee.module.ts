import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeService } from 'src/services/employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }
