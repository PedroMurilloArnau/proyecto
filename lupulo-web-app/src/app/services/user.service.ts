import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpointUser: string = 'http://localhost:3000/beer/users/new';
  endpointLogin: string = 'http://localhost:3000/beer/users/login';
  constructor(private http: HttpClient,private router: Router) { }
  
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
  )

}

}