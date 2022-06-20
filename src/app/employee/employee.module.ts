import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
