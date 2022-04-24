import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestDocumentService {

  endpointDocuments: string = 'http://localhost:3000/beer/tasting/documentation/all'
  endpointAddDocuments: string = "http://localhost:3000/beer/tasting/documentation/add";

  constructor(private http: HttpClient,private router: Router,private authService: UserService) { }


gestDocument(){
  return this.http.get(this.endpointDocuments)
  .pipe(
    map((data:any)=>{
      return data;
    })
  )
}
addDocument(docu){
   return this.http.post(this.endpointAddDocuments,docu)
   .pipe(
     map((data: any) => {
       return data;
     })
   );
 }
}