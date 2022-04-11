import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  user: any;
  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()


}
}
