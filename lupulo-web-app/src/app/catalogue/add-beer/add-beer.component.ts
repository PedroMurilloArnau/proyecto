import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { GestBeerService } from 'src/app/services/gest-beer.service'

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

  types: any;

  constructor(private authService: UserService,private gestBeerService: GestBeerService,private router: Router) { }

  ngOnInit(){

    this.types = this.authService.getTypeBeer().subscribe((res: any) => {
      this.types = res;
      console.log(this.types);
    });
   
  }
  onAddBeer(form: NgForm){
    this.gestBeerService.postBeer({
      name: form.value.name,
      stock: form.value.stock,
      image: form.value.image,
      biertype: form.value.biertype,
      priceUni: form.value.priceUni,
    })
    .subscribe((res: any) =>{
      console.log(res)});
      this.router.navigate(['/catalogue']);
  }
}
