import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {
  region:Region={
    id:0,
    name:''
  }
  
  isSuccessful:boolean=false;

  addRegionForm:FormGroup;

  constructor(private builder:FormBuilder, private regionService:RegionService) { 
    this.addRegionForm = builder.group({
      'regionName':new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'regionDescription': new FormControl()
    });
  }

  ngOnInit(): void {
    
  }

  insertRegion(form:NgForm){
    console.log(form.value)
  }
  resetPage(form:NgForm){
    form.reset();
  }

  saveRegion(){
    this.region.id= 0
     this.region.name= this.addRegionForm.value["regionName"];
     this.regionService.insertRegion(this.region).subscribe((d:any)=>{
      this.isSuccessful=true;
     });
  }
}
