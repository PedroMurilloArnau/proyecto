import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.css']
})
export class TastingComponent implements OnInit {
  user: any;
  type: any;
  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
  }

}
