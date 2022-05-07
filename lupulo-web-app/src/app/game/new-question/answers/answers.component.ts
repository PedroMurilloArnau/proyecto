import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  anwsers: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string},private gameService: GameService ) { }

  ngOnInit(): void {
    
    this.anwsers = this.gameService.getyourAnwsers(this.data.id)
    .subscribe((res: any) => {
      console.log(res)
      this.anwsers = res;
    })
    
  }

}
