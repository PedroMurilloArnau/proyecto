import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../../services/user.service';
import { GameService } from 'src/app/services/game.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-your-games',
  templateUrl: './your-games.component.html',
  styleUrls: ['./your-games.component.css']
})
export class YourGamesComponent implements OnInit {
  user: any;
  games: any;
  dataSource: any;

  constructor(private authService: UserService,private gameService: GameService) { }

  ngOnInit(){
    this.user = this.authService.getUser();
    this.games = this.gameService.getyourGames(this.user.email)
    .subscribe((res: any) => {
      this.games =
      this.dataSource = res;
    }) 
  }
  displayedColumns: string[] = ['date', 'score'];

}
