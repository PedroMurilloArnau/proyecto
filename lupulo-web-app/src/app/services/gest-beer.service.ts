import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";
import { UserService } from '../services/user.service';
import { isNgTemplate } from '@angular/compiler';
import { threadId } from 'worker_threads';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class GestBeerService {

  dataBeer: any;
  purchase: any;
  list: [{name: string}];
  listr: [{name: string}]

  nedpointBeers: string = 'http://localhost:3000/beer/cataloge/all';
  endpointaddPurchase: string = 'http://localhost:3000/beer/purchase/add';
  endpointTypeBeers: string = 'http://localhost:3000/beer/cataloge/type';
  endpointAddTasting: string = 'http://localhost:3000/beer/tasting/add';
  endpointAddBeer: string = 'http://localhost:3000/beer/cataloge/new';
  endpointPostTastingtNotes: string = 'http://localhost:3000/beer/cataloge/tastingtNotes';

  constructor(private http: HttpClient,private router: Router,private authService: UserService) { }
  borrarLista(){
  if(this.list !== undefined){
  this.list.splice(0);
}
}  
getBeer() {
  return this.http.get(this.nedpointBeers)
  .pipe(
    map((data: any) =>{
      this.dataBeer = data
      return this.dataBeer;
    })
  )
}
postAddPurchase(bier){
  if(this.list === undefined){
  this.list = [bier];
}
else{
  this.list.push(bier)
}
this.router.navigate(['/purchase']);
}
getPurchase(){  
  return this.list;
}
deletePurchase(namer: string){
 const indice =  this.list.findIndex(param => param.name === namer);
 console.log(indice);
  this.list.splice(indice,1);
  console.log(this.list.length);
  
}
completePurchase(person: string){
    return this.http.post(`http://localhost:3000/beer/purchase/add/${person}`, this.list)
    .pipe(
      map((data: any) => {
        return data;
      })
    );
}
postBeer(beer){
  return this.http.post(this.endpointAddBeer, beer)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}
postTastingNotes(notes){
  console.log(notes);
  return this.http.post(this.endpointPostTastingtNotes,notes)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}
}