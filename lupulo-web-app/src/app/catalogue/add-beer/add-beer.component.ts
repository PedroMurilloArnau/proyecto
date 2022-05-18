import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { GestBeerService } from 'src/app/services/gest-beer.service';
import Swal  from 'sweetalert2';

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
      if(res.ok == true){
      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        position: 'bottom',
        icon: 'success',
        title: 'beer added!',
        showConfirmButton: false,
        timer: 1000
      })
      }
      else{
        Swal.fire({
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          position: 'bottom',
          icon: 'error',
          title: 'ups... beer not added!',
          showConfirmButton: false,
          timer: 1000
        })
      }
      });
      this.router.navigate(['/catalogue']);
  }
}
