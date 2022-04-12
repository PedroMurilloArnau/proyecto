import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  beers: any;
  user: any;
  type: any;



  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
    this.beers = this.authService.getBeer()
    .subscribe((res: any) => {
      this.beers = res;
    })
}
onAddBeer(form: NgForm){
    console.log(form)
}
}
