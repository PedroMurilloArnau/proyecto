import { Component, OnInit } from '@angular/core';
import { NgForm, NgSelectOption } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { GestBeerService } from '../../services/gest-beer.service';
import { TastingService } from '../../services/tasting.service';
import { timestamp } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-tasting',
  templateUrl: './new-tasting.component.html',
  styleUrls: ['./new-tasting.component.css']
})
export class NewTastingComponent implements OnInit {
  formul = false;
  table = true;
  biers: any;
  types: any;
  selectedValue: any;
  bien: any;
  bires: [{name: string}];
  bires1: [{name: string}];
  bires2: [{name: string}];
  bires3: [{name: string}];
  bires4: [{name: string}];
  si: any;
  si1: any;
  si2: any;
  si3: any;
  si4: any;
  minDate;
  maxDate;
  actual;
  date;
  user: any;


  constructor(private userService: UserService, private gestbeerService: GestBeerService,
    private tastingService: TastingService,private router: Router ) { }

  ngOnInit(){
    this.biers = this.gestbeerService.getBeer().subscribe((res: any) => {
      this.biers = res;
    
    });
    this.user = this.userService.getUser();
    this.types = this.userService.getTypeBeer().subscribe((res: any) => {
      this.types = res;
    });
    const currentYear = new Date().getFullYear();
    this.minDate = new Date()
    this.maxDate = new Date(currentYear + 0, 11, 31);
    const minute = new Date().getMinutes();
    this.actual = new Date(+0,0,0,0,20);
    this.date = new Date();
  }
   

    
    
  

  onForm(){
    this.formul = true;
    this.table = false;
  }
  onTable(){
    this.formul = false;
    this.table = true;

  }
  onAddTasting(form: NgForm){
    this.tastingService.createTasting({
      name: form.value.name,
      type: form.value.type,
      taster: this.user.email,
      students: form.value.students,
      bier1Name: form.value.bier1Name,
      bier2Name: form.value.bier2Name,
      bier3Name: form.value.bier3Name,
      bier4Name: form.value.bier4Name,
      date: form.value.date,
      duration: form.value.duration,
      price: form.value.price
    })
    .subscribe((res: any) =>{
      console.log(res)});
      this.router.navigate(['/login']);
  
  }
  onSelect(si){
    this.si = si;
    this.bires = [{name:"juan"}];
    console.log(si.value);
    this.bires.splice(0);
     for(let beer of this.biers){
      if(beer.biertype === si.value){
        if(this.si1 !== undefined){
          if(this.si2 !== undefined){
            if(this.si3 !== undefined){
              this.bires3.splice(0);
              this.bires2.splice(0);
              this.bires1.splice(0);
            }
            this.bires2.splice(0);
            this.bires1.splice(0);
          }
          this.bires1.splice(0);
        }
      this.bires.push(beer);
      console.log(this.bires);
      }
    }    
  }
  onSelect1(si1){
    this.si1 = si1;
    this.bires1 = [{name:"juan"}];
    console.log(si1.value);
    this.bires1.splice(0);
     for(let beer of this.bires){
      if(beer.name !== si1.value){
        if(this.si2 !== undefined){
          if(this.si3 !== undefined){
            this.bires3.splice(0);
            this.bires2.splice(0);
          }
          this.bires2.splice(0);
        }
      this.bires1.push(beer);
      console.log(this.bires);
      }
    }
  }
  onSelect2(si2){
    this.si2 = si2;
    this.bires2 = [{name:"juan"}];
    console.log(si2.value);
    this.bires2.splice(0);
     for(let beer of this.bires1){
      if(beer.name !== si2.value){
        if(this.si3 !== undefined){
          if(beer.name !== this.si3.value){
            this.bires3.splice(0);
          }        
        }
      this.bires2.push(beer);
      console.log(this.bires);
      }
    }
  }
  onSelect3(si3){
    this.si3 = si3;
    this.bires3 = [{name:"juan"}];
    console.log(si3.value);
    this.bires3.splice(0);
     for(let beer of this.bires2){
      if(beer.name !== si3.value){
      this.bires3.push(beer);
      console.log(this.bires);
      }
    }
  }
  onSelect4(si){
  }
}
