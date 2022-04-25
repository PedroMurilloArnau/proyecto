import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { id } from 'date-fns/locale';
import { UserService } from '../../services/user.service';
import { StopTastingComponent } from './sotop-tasting-component'

@Component({
  selector: 'app-current-tasting',
  templateUrl: './current-tasting.component.html',
  styleUrls: ['./current-tasting.component.css']
})
export class CurrentTastingComponent implements OnInit {
  
  @Output() tastingExit = new EventEmitter();
  tate: any;
  user: any;
  idt: any;
  tester: any;
  timer: any;
  progress = 0;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: {ids: number, user: string},private authService: UserService,private dialog: MatDialog) { }

  ngOnInit(){
      
      this.tate = this.authService.getTheTaste(this.data.ids).subscribe((res: any) => {
      this.tate = res;
      this.tester = this.authService.findCliente(this.tate.taster).subscribe((res: any) => {
        this.tester = res;
        console.log(this.tester.user.name);
      })
      

      this.user = this.authService.getUser()

      
  })
  

  this.startOrResumeTimer();
  }
  startOrResumeTimer(){
    this.timer =  setInterval(() => {
      this.progress = this.progress + 20;
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
}
