import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TasteComponent } from './taste/taste.component'
import { ɵparseCookieValue } from '@angular/common';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  biers: any;
  user: any;
  type: any;
  tasteNote: any;
  beers: any;
  numero: number;

  



  constructor(private authService: UserService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
    this.beers = this.authService.getBeer()
    .subscribe((res: any) => {
      this.beers = res;
    });
    this.tasteNote =  this.beers.tasteNote
}
onAddBeer(form: NgForm){
    this.authService.postAddPurchase({
      name: form.value.name,
      cantidad: form.value.number,
    })
    .subscribe((res: any) =>{
      console.log()});

    this.router.navigate(['/purchase']);
}
openDialog(name){
  const dialogRef = this.dialog.open(TasteComponent,{
    data:{ namer: name},
    width: '400px',
  })
  
}
number(algo){
  console.log(Number(algo));
  return Number(algo);
}
}
