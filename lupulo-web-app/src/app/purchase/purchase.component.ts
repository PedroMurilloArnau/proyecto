import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { GestBeerService } from '../services/gest-beer.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  user: any;
  purchase: any;
  sum = 0;
  beers: any;
  beer: any;
  cantidad: number;
  sumpe = 0;
  dataSource: any;
  constructor(private authService: UserService, private gestbeerService: GestBeerService,private router: Router) { }

  

  ngOnInit(){
    this.user = this.authService.getUser();
    this.purchase = this.gestbeerService.getPurchase();
    this.beers = this.gestbeerService.getBeer()
    .subscribe((res: any) => {
      this.beers = res;
      for(let puri of this.purchase){
        this.sum = this.sum + puri.cantidad;
        for(let beer of this.beers){
          if(beer.name === puri.name){
            this.sumpe = this.sumpe + Math.round(((beer.priceUni + beer.priceUni*0.25)*puri.cantidad)* 100) / 100;
            puri.price  = Math.round(((beer.priceUni + beer.priceUni*0.25)*puri.cantidad)* 100) / 100;
            puri.iva = Math.round(((beer.priceUni*0.25)*puri.cantidad)* 100) / 100;
          }
        }
      }
      this.dataSource = this.purchase
    });
  }
  displayedColumns: string[] = ['name', 'cantidad', 'price', 'iva','button'];

sendPurchase(){
  this.gestbeerService.postAddPurchase({
  })
}
delPurchase(name){
  this.gestbeerService.deletePurchase(name);
    
    this.router.navigate(['/catalogue']);
}
completePurchase(name){
  this.gestbeerService.completePurchase(name).subscribe((res: any) =>{
    if(res.ok = true){
      this.gestbeerService.borrarLista();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Purchase has been saved!!!',
        showConfirmButton: false,
        timer: 1000
      })
      this.router.navigate(['/']);
    }
    
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your Purchase has not save!!!',
        showConfirmButton: false,
        timer: 1000
      })
      this.router.navigate(['/catalogue']);
    }  
    });
}
}
