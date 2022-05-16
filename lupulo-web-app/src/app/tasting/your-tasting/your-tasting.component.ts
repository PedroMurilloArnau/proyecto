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
  dataSource: any; 

  constructor(private authService: UserService,public dialog: MatDialog) { }

  ngOnInit(){
    this.tates = this.authService.getYourTaste().subscribe((res: any) => {
      this.dataSource = res.tates;
      this.tates = res.tastes;
      this.user = this.authService.getUser();
    });
  }
  displayedColumns: string[] = ['name', 'button'];
  start(id){
    this.dialog.open(CurrentTastingComponent,{
      data:{ids: id,
      user: this.user.email
      },
      width: '900px',
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
