import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-your-tasting',
  templateUrl: './your-tasting.component.html',
  styleUrls: ['./your-tasting.component.css']
})
export class YourTastingComponent implements OnInit {
 
  tates: any;
  

  constructor(private authService: UserService) { }

  ngOnInit(){
    this.tates = this.authService.getYourTaste().subscribe((res: any) => {
      this.tates = res.tastes;
    });
  }

}
