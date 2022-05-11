import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgForm } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import Swal  from 'sweetalert2';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {
  game:any;
  timer: any;
  gameact: any;
  progress = 0;
  answer = 0;
  question: any;
  activer = true;
  conclusion: any;
  hits= 0;
  user: any;

  constructor(private authService: UserService,private router: Router, private gameService: GameService) { }

  ngOnInit(){
    this.game = this.gameService.createGame().subscribe((res: any) => {
      this.game = res.game;
    
      
    })
    this.user = this.authService.getUser();
    this.startTimer();
  }
    startTimer(){
      this.timer =  setInterval(() => {
        this.progress = this.progress + 5;
        if (this.progress >= 100){
          this.answer = this.answer+1
          
          if(this.answer<4){
          this.progress = 0
          this.questioner(this.answer)
          } else{
          this.progress = 100;
          this.answer=4;
          this.activer=false;
        }
        }
      },1000);
    }
    questioner(answer){
      
      this.question = this.game[answer];
      this.conclusion = this.question.questions;
      return this.question.question

    }
    sendAnswer(answeres){
      if(answeres === true){
        this.hits = this.hits + 1;
        this.progress = 99;
         
        Swal.fire({
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          position: 'bottom',
          icon: 'success',
          title: 'Correct!',
          showConfirmButton: false,
          timer: 1000
        })
        // this.answer = this.answer +1;
      }
      else{
        this.progress = 99;
         
        Swal.fire({
        
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        position: 'bottom',
        icon: 'error',
        title: 'Not correct!',
        showConfirmButton: false,
        timer: 1000
        })
        // this.answer = this.answer +1;
      }
      if(this.answer > 4){
        this.progress = 100;
        
        this.activer=false;
        
      }
    }
    sendGame(){
      this.gameService.finisgame({
        gamer: this.user.email,
        puntuation: 25*this.hits,

      })
      .subscribe((res: any) => {
        if(res.ok = true){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Geme send!',
            showConfirmButton: false,
            timer: 900
          })
        }
        else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Game not save!',
            showConfirmButton: false,
            timer: 900
          })

        }
      })
    }
  }
  
  
  


