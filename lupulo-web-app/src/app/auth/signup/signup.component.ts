import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;

  constructor(private userService: UserService,private router: Router,public dialog: MatDialog,) { }

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
});
      this.router.navigate(['/login']);
  }
  openDialog(){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {}



