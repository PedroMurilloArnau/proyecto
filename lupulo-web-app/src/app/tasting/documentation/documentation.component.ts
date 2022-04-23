import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  user: any;
  type: any;

  constructor(private authService: UserService) { }


  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
  }
}
