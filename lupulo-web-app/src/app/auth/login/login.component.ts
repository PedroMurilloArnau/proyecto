import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private userService: UserService,private router: Router) { }


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
      this.router.navigate(['/']);
    }
    else{
      this.router.navigate(['/login'])
    }  
    });
  }
}
