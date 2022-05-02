import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  user: any;
  type: any;

  constructor(private authService: UserService) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
  }
  onAddQuestion(){

  }

}
