import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendorComponent,
    AddVendorComponent,
    ListVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule
  ]
})
export class VendorModule { }
