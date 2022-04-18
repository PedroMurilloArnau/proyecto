import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-tasting',
  templateUrl: './new-tasting.component.html',
  styleUrls: ['./new-tasting.component.css']
})
export class NewTastingComponent implements OnInit {
  formul = false;
  tablel = true;

  constructor() { }

  ngOnInit(){
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
}
