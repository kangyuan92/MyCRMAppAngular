import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
