import { HttpClient } from '@angular/common/http';
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

  endpointUser: string = 'http://localhost:3000/beer/users/new';
  endpointLogin: string = 'http://localhost:3000/beer/users/login';
  nedpointBeers: string = 'http://localhost:3000/beer/cataloge/all';
  endpointAddBeer: string = 'http://localhost:3000/beer/cataloge/new';
  constructor(private http: HttpClient,private router: Router) { }
  
  getClientes() {
    return this.http.get(this.endpointUser)
      .pipe(
        map((data: any) => {
          return data;
        })
      )
  }
  getBeer() {
    return this.http.get(this.nedpointBeers)
    .pipe(
      map((data: any) =>{
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
      this.upa = upa
      return upa;
      
    }
}
    getUser(){
      return this.upa;
    }
}