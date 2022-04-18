
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-all-tasting',
  templateUrl: './all-tasting.component.html',
  styleUrls: ['./all-tasting.component.css']
})
export class AllTastingComponent implements OnInit {
  taste: any;
  tates: any;
  user: any;
  type: any;

  constructor(private authService: UserService,private router: Router,) { }

  ngOnInit(){
    this.tates = this.authService.getTaste().subscribe((res: any) => {
      this.tates = res;
      this.user = this.authService.getUser()
      this.type = this.user.type
       });
  };
    onAddtastesd(form: NgForm){
      this.authService.postAddTaster({
        name: form.name,
        email: this.user.email,
        
      })

    }

  
}
