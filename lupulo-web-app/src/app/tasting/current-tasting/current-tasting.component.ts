import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { id } from 'date-fns/locale';
import { UserService } from '../../services/user.service';
import { StopTastingComponent } from './sotop-tasting-component';
import { NgForm } from '@angular/forms';
import { BuiltinTypeName } from '@angular/compiler';
import { FinishTastingComponent } from './finish-tasting-component';
import { GestBeerService } from '../../services/gest-beer.service';
import { TastingService } from '../../services/tasting.service';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-current-tasting',
  templateUrl: './current-tasting.component.html',
  styleUrls: ['./current-tasting.component.css']
})
export class CurrentTastingComponent implements OnInit {
  
  @Output() tastingExit = new EventEmitter();
  tate: any;
  userc: any;
  idt: any;
  tester: any;
  timer: any;
  progress = 0;
  casilla1: boolean;
  casilla2: boolean;
  casilla3: boolean;
  casilla4: boolean;
  casa: boolean;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number, user: string},
  private authService: UserService,private gestBeerService: GestBeerService,private dialog: MatDialog,
  private tastingService: TastingService,private router: Router,) { }

  ngOnInit(){
      
      this.tate = this.authService.getTheTaste(this.data.ids).subscribe((res: any) => {
      this.tate = res;
      this.tester = this.authService.findCliente(this.tate.taster).subscribe((res: any) => {
        this.tester = res;
      
      })
      

      this.userc = this.authService.getUser()
      this.casilla1 = true;
      this.casilla2 = true;
      this.casilla3 = true;
      this.casilla4 = true;
      this.casa = false;
      
  })
  

  this.startOrResumeTimer();
  }
  startOrResumeTimer(){
    this.timer =  setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100){
        clearInterval(this.timer);
      }
    },1000);

  }
  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTastingComponent, {data:{
      progress: this.progress
    }});
     dialogRef.afterClosed().subscribe( result => {
       if (result){
         this.tastingExit.emit();
       }
       else{
         this.startOrResumeTimer();
       }
    });
  }
  onAddBeer(form: NgForm,consol,tate){

    this.gestBeerService.postTastingNotes({
      beername: tate,
      color: form.value.color,
      smell: form.value.smell,
      tasteMoth: form.value.tasteMoth,
      bitterness: form.value.bitterness,
      aftertaste: form.value.aftertaste
    }).subscribe((res: any) =>{
      if(res.ok = true){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You add a taste note.',
          showConfirmButton: false,
          timer: 1500
        })}
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      })
  }
  onFinish(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(FinishTastingComponent, {data:{
      progress: this.progress
    }});
     dialogRef.afterClosed().subscribe( result => {
       if (result){
         
        this.tastingService.endYourTasting({
          email: this.userc.email,
          name: this.tate.name
        }).subscribe((res: any) =>{
          if(res.ok = true){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'You are login',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/catalogue']);
          }
          this.router.navigate(['/game']);
        })
        this.router.navigate(['/game']);
       }
       else{
         this.startOrResumeTimer();
       }
    });
  }
  clickevent(){
    this.tastingService.endYourTasting({
      email: this.userc.email,
      name: this.tate.name
    }).subscribe((res: any) =>{
      if(res.ok = true){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You are login',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/catalogue']);
  }
  })
  }
}
