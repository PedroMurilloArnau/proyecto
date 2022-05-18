import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { GestBeerService } from '../../services/gest-beer.service';
import { TastingService } from '../../services/tasting.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-tasting-taster',
  templateUrl: './tasting-taster.component.html',
  styleUrls: ['./tasting-taster.component.css']
})
export class TastingTasterComponent implements OnInit {
  user: any;
  purchase: any;
  sum = 0;
  beers: any;
  beer: any;
  cantidad: number;
  sumpe = 0;
  dataSource: any;
  tastings: any;
  selected: Date | null;

  constructor(private authService: UserService, private gestbeerService: GestBeerService,
    private tastingService: TastingService ,private router: Router) { }

  ngOnInit(){
    this.user = this.authService.getUser();
    this.tastings = this.tastingService.getTasterTasting(this.user.email)
    .subscribe((res:any) => {
      this.tastings = res;
      this.dataSource = this.tastings
    })
    
  }
   displayedColumns: string[] = ['name'
   , 'type', 'places', 'placesAvailable','price','button'];
  activateTasting(name){

  }

}
