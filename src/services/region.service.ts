import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Region } from 'src/interface/region';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  
  url:string =environment.apiKey+environment.apiControllers.region;
  constructor(private httpClient:HttpClient) { }

  getRegion(){
    return this.httpClient.get("https://localhost:7294/api/Region");
  }

  insertRegion(region:Region):Observable<any>
  {
    return this.httpClient.post(this.url,region);
  }

  deleteRegion(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+id)
  }

  callApiDemo(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
