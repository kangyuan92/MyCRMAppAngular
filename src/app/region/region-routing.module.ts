import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionComponent } from './region.component';

const routes: Routes = [
  {path:'add', component:AddRegionComponent},
  {path:'list', component:ListRegionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
