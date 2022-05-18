import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
import { HttpParams,HttpClient,HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../../../enviroment/enviroment';
import { GestBeerService } from '../../services/gest-beer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  GOOGLE_REDIRECT: string = '/signin-with-google';

  constructor(private userService: UserService,private router: Router,@Inject(DOCUMENT) private document: any, private gestbeerService: GestBeerService) { }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }
  onSubmit() {
    this.userService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe((res: any) =>{
    if(res.ok = true){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You are login',
        showConfirmButton: false,
        timer: 1500,
        width: 1
      })
      this.userService.isAuth({
        type: res.type,
        email: res.email
      });
      this.gestbeerService.borrarLista();
      localStorage.setItem('token',res.token);
      this.router.navigate(['/']);
      localStorage.clear
    }
    
    else{
      this.router.navigate(['/login']);
    }  
    });
  }
  onSignWithGoogle(): void{
    const queryParams = new HttpParams()
    .set('scope', 'email https://www.googleapis.com/auth/admin.directory.user.readonly')
    .set('access_type', 'online')
    .set('state', `${this.document.location.origin}${this.GOOGLE_REDIRECT}`)
    .set('include_granted_scopes', 'true')
    .set('redirect_uri', `${this.document.location.origin}${this.GOOGLE_REDIRECT}`)
    .set('response_type', 'code')
    .set('prompt', 'select_account')
    .set('client_id', enviroment.GOOGLE_CLIENT_ID);

  this.document.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${queryParams.toString()}`;
}
}
