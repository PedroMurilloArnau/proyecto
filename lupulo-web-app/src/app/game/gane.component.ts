import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gane',
  templateUrl: './gane.component.html',
  styleUrls: ['./gane.component.css']
})
export class GaneComponent implements OnInit {
  user: any;
  type: any;

  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type

  }

}
