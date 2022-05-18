import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TasteComponent } from './taste/taste.component'
import { ɵparseCookieValue } from '@angular/common';
import { GestBeerService } from '../../services/gest-beer.service';
import Swal  from 'sweetalert2';



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
  purchase: any;
  puruchi: any;
  dataSource: any;

  



  constructor(private authService: UserService,private router: Router,public dialog: MatDialog, private gestbeerService: GestBeerService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
    this.beers = this.gestbeerService.getBeer()
    .subscribe((res: any) => {
      this.purchase = this.gestbeerService.getPurchase();
      this.dataSource= this.beers = res;
      for(let puri of this.purchase){
        for(let beer of this.beers){
          if(beer.name === puri.name){
            beer.stock = beer.stock - puri.cantidad;
          }
        }
      }
    });
    this.tasteNote =  this.beers.tasteNote
}
displayedColumns: string[] = ['name','imag','stock','priceUni','biertype','purchase','tastenote'];


onAddBeer(form: NgForm){
  this.puruchi = this.gestbeerService.getPurchase();
  if(this.puruchi !== undefined){
  for(let puri of this.puruchi){
  if(puri.name === form.value.name){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You add the same beer! Remove an add more beer',
      
    })
    return this.router.navigate(['/purchase']);
  }
}
}
   return this.gestbeerService.postAddPurchase({
      name: form.value.name,
      cantidad: form.value.number,
    })
}
openDialog(name){
  const dialogRef = this.dialog.open(TasteComponent,{
    data:{ namer: name},
    width: '400px',
  })
}
number(algo){
  return Number(algo);
}
}
