import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AnswersComponent } from './answers/answers.component';

export interface Buser {
  name: string;
}

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  formul = false;
  table = true;
  myControl = new FormControl();
  options:  Buser[];
  filteredOptions: Observable<Buser[]>;
  user: any;
  type: any;
  questions: any;
  dataSource: any;
  firts?: [{name: string}];
  namer: string;

  constructor(private authService: UserService,private router: Router
    , private gameService: GameService, public dialog: MatDialog) { }

  ngOnInit(){
    this.user = this.authService.getUser()
    this.type = this.user.type
    this.questions = this.gameService.getyourQuest()
    .subscribe((res:any) => {
      this.dataSource = res;
    this.firts = [{name: ""}]
      for(let quest of res){
        this.namer = quest.question
        this.firts.push({name:this.namer});

      }
      this.options = this.firts;

    })
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
    this.options.push
  }
  displayFn(user: Buser): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Buser[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  onForm(){
    this.formul = true;
    this.table = false;
  }
  onTable(){
    this.formul = false;
    this.table = true;

  }
  onAddQuestion(form: NgForm){
    this.gameService.addQuestion({
      creator: this.user.email,
      question: form.value.question,
      CorrectAnswer: form.value.CorrectAnswer,
      AnswerSecond: form.value.AnswerSecond,
      AnswerThird: form.value.AnswerThird,
      AnswerFourth: form.value.AnswerFourth,
    })
    .subscribe((res: any) => {
      if(res.ok = true){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'your Question added!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/catalogue']);
      }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Your Question not added!!!',
        showConfirmButton: false,
        timer: 1000
      })
      this.router.navigate(['/catalogue']);
    }
    })
  }
  displayedColumns: string[] = ['question', 'answer'];
  openDialog(id){
    
    this.dialog.open(AnswersComponent,{
      data:{ id: id},
      width: '400px',
    })
  }
}
