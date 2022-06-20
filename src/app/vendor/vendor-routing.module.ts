import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  {path:'add', component:AddVendorComponent},
  {path:'list', component:ListVendorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
