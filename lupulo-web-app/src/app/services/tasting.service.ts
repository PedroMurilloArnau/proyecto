import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TastingService {

  endpointTastingEnd: string = 'http://localhost:3000/beer/tasting/finsh';
  endpointAddTasting: string = 'http://localhost:3000/beer/tasting/add';
  endpointTasteAdd: string = 'http://localhost:3000/beer/tasting/addClient';
 


  constructor(private http: HttpClient,private router: Router,) { }


createTasting(tasting){
  return this.http.post(this.endpointAddTasting,tasting)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}
postAddTaster(taste){
  return this.http.post(this.endpointTasteAdd,taste)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}
endYourTasting(info){
  return this.http.post(this.endpointTastingEnd, info)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}
getTasterTasting(email){
  return this.http.get(`http://localhost:3000/beer/tasting/taster/${email}`)
  .pipe(
    map((data: any) => {
      return data;
      
    })
  )
}
}
