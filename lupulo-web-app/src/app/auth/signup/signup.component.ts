import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }
  onSubmit(form: NgForm){
    this.userService.postUsuarios({
      surname: form.value.surname,
      autic: form.value.agree,
      code: form.value.code,
      birthdate: form.value.birthdate,
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    })
    .subscribe((res: any) =>{
      console.log(res)})
  }
}
