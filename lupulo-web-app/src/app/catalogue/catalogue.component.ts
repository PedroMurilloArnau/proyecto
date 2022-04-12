import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  onAddBeer = false;
  user: any;
  type: string;
  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
    
  }

}
