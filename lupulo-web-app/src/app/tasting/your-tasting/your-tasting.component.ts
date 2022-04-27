import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CurrentTastingComponent} from '../current-tasting/current-tasting.component';

@Component({
  selector: 'app-your-tasting',
  templateUrl: './your-tasting.component.html',
  styleUrls: ['./your-tasting.component.css']
})
export class YourTastingComponent implements OnInit {
 
  tates: any;
  user: any;
  ongoingTasting = true;
  

  constructor(private authService: UserService,public dialog: MatDialog) { }

  ngOnInit(){
    this.tates = this.authService.getYourTaste().subscribe((res: any) => {
      this.tates = res.tastes;
      this.user = this.authService.getUser();
    });
  }
  start(id){

    this.dialog.open(CurrentTastingComponent,{
      data:{ids: id,
      user: this.user.email
      },
      width: '850px',
    })  
  }
  valid(name){
    for(let tate of this.tates){
      if(tate.name === name){
        for(let studient of tate.studient){
      if(studient.name === this.user.email && studient.status === true)
      return true}
      }
    }
    return false;
    }
}
