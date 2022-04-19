import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-tasting',
  templateUrl: './new-tasting.component.html',
  styleUrls: ['./new-tasting.component.css']
})
export class NewTastingComponent implements OnInit {
  formul = false;
  tablel = true;
  biers: any;
  types: any;

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.biers = this.userService.getBeer();
    console.log(this.biers);
    this.types = this.userService.getTypeBeer().subscribe((res: any) => {
      this.types = res;
      console.log(this.types);
    });
  }

  onForm(){
    this.formul = true;
    this.tablel = false;
  }
  onTable(){
    this.formul = false;
    this.tablel = true;

  }
  onAddBeer(form: NgForm){
  }
  onSelect(type){
    
  }
}
