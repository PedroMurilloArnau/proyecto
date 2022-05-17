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
  endpointaddPurchase: string = 'http://localhost:3000/beer/purchase/add';
  endpointTaste: string = 'http://localhost:3000/beer/cataloge/taste';
  endpointTasteAll: string = 'http://localhost:3000/beer/tasting/all';
  endpointTasteyour: string = `http://localhost:3000/beer/tasting/yourTasting/${this.person}`;
  endpointTypeBeers: string = 'http://localhost:3000/beer/cataloge/type';
  endpointThistaste: string = 'http://localhost:3000/beer/tasting/yourTasting';
  

  constructor(private http: HttpClient,private router: Router,) { }



  getTheTaste(id) {
    console.log(id)
    return this.http.get(`http://localhost:3000/beer/tasting/theTasting/${id}`)
    .pipe(
      map((data: any) => {
        console.log(data);
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
  getTaster(name){
    return this.http.get(`http://localhost:3000/beer/cataloge/taste/${name}`)
    .pipe(
      map((data: any) => {
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
    localStorage.removeItem("email");
    localStorage.removeItem("type");
    localStorage.removeItem("token");
    localStorage.removeItem("hash");
    localStorage.removeItem("ok");
    this.router.navigate(['/login']);
  }
  isAuth(upa){
    if(upa != null){
      this.authChange.next(true);
      console.log(this.authChange);
      this.upa = upa;
      localStorage.setItem("ok", "true")
      localStorage.setItem("email",upa.email);
      localStorage.setItem("type",upa.type);
      return upa;
      
    }
  }
  Auth(){
    if(localStorage.getItem("ok") == "true"){
    return true;
  }
  else{
    return false;
  }
  }

  getUser(){
    this.user = {email:localStorage.getItem("email"),type:localStorage.getItem("type")}
    return this.user;
  }
}

