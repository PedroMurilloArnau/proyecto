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
  upa: {
    email: string
  };
  list: [{}];
  user: any;
  bier: any;
  person = "juanchPadilla@filo.com";
  id: any;
  

  
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
  endpointThistaste: string = 'http://localhost:3000/beer/tasting/yourTasting';
  endpointAddTasting: string = 'http://localhost:3000/beer/tasting/add';

  constructor(private http: HttpClient,private router: Router,) { }

  createTasting(tasting){
    return this.http.post(this.endpointAddTasting,tasting)
    .pipe(
      map((data: any) =>{
        return data;
      })
    )
  }

  getTheTaste(id) {
    
    return this.http.get(`http://localhost:3000/beer/tasting/theTasting/${id}`)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
};
  getYourTaste() {
    return this.http.get(`http://localhost:3000/beer/tasting/yourTasting/${this.upa.email}`)
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


  getTaster(name){
    return this.http.get(`http://localhost:3000/beer/cataloge/taste/${name}`)
    .pipe(
      map((data: any) => {
        console.log(data)
        return data;
        
      })
    )
  }
  findCliente(email) {
    console.log(email);
    return this.http.get(`http://localhost:3000/beer/users/find/${email}`)
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

