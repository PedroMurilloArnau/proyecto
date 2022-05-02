
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { TastingService } from '../../services/tasting.service';
import Swal  from 'sweetalert2';

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
 

  constructor(private authService: UserService,private router: Router,private tastingService: TastingService) { }

  ngOnInit(){
    this.tates = this.authService.getTaste().subscribe((res: any) => {
      this.tates = res;
      this.user = this.authService.getUser()
      this.type = this.user.type
      
       });
      
       
  };
    onAddtastesd(namer){
      
      this.tastingService.postAddTaster({
        name: namer,
        email: this.user.email,        
      }).subscribe((res: any) =>{
        if(res.ok = true){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `You are add in tasting`,
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/catalogue']);
    }
  })
}
    valid(name){
      for(let tate of this.tates){
        if(tate.name === name){
          for(let studient of tate.studient){
        if(studient.name === this.user.email)
        return true}
        }
      }
      return false;
      }
}
