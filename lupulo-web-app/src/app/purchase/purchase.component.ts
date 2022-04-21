import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
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

  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser();
    this.purchase = this.authService.getPurchase();
    this.beers = this.authService.getBeer()
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
    });
  }
sendPurchase(){
  this.authService.postAddPurchase({

  })

}
}
