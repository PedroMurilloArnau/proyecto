import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  authChange = new Subject<boolean>();
  upa: [];
  list: [{}];
  user: any;
  bier: any;
  person = "juanchPadilla@filo.com";
  

  endpointUser: string = 'http://localhost:3000/beer/users/new';
  endpointLogin: string = 'http://localhost:3000/beer/users/login';
  nedpointBeers: string = 'http://localhost:3000/beer/cataloge/all';
  endpointAddBeer: string = 'http://localhost:3000/beer/cataloge/new';
  endpointaddPurchase: string = 'http://localhost:3000/beer/purchase/add';
  endpointTaste: string = 'http://localhost:3000/beer/cataloge/taste';
  endpointTasteAll: string = 'http://localhost:3000/beer/tasting/all';
  endpointTasteAdd: string = 'http://localhost:3000/beer/tasting/addClient';
  endpointTasteyour: string = `http://localhost:3000/beer/tasting/yourTasting/${this.person}`;
  endpointTypeBeers: string = 'http://localhost:3000/beer/cataloge/type';

  constructor(private http: HttpClient,private router: Router,) { }
  
  getYourTaste() {
    return this.http.get(`http://localhost:3000/beer/tasting/yourTasting/${this.person}`)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  };
  getTypeBeer() {
    return this.http.get(this.endpointTypeBeers)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
};
  getTaste(){
    return this.http.get(this.endpointTasteAll)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
};
  postAddTaster(taste){
  return this.http.post(this.endpointTasteAdd, taste)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
}


  postTaster(name){
    return this.http.post(this.endpointTaste, name)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  }

  getClientes() {
    return this.http.get(this.endpointUser)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  }
  postBeer(beer){
    return this.http.post(this.endpointAddBeer, beer)
    .pipe(
      map((data: any) =>{
        return data;
      })
    )
  }
  postUsuarios(users){
  return this.http.post(this.endpointUser, users)
  .pipe(
    map((data: any) =>{
      return data;
    })
  )
  }
  login(user){
  return this.http.post(this.endpointLogin, user)
  .pipe(
    map((data: any) => {
      return data;
    })
  )}
  logout(){
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }
  isAuth(upa){
    if(upa != null){
      this.authChange.next(true);
      this.upa = upa;
      
      return upa;
      
    }
  }
  Auth(){
    return this.authChange;
  }

    getUser(){
      return this.upa;
    }
}

