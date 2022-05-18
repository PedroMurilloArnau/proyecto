import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  endpointFinishGame : string = 'http://localhost:3000/beer/game/finishgame';
  endpointAddQuestion : string = 'http://localhost:3000/beer/game/question/add';
  endpointCreateNewgame: string = 'http://localhost:3000/beer/game/newgame'

  constructor(private http: HttpClient,private router: Router) { }

  addQuestion(question){
    return this.http.post(this.endpointAddQuestion,question)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  };
  
  finisgame(game){
    return this.http.post(this.endpointFinishGame,game)
    .pipe(
      map((data: any) => {
        return data;
      })
    )
  }
  createGame(){
    return this.http.get(this.endpointCreateNewgame)
    .pipe(
      map((data:any) => {
        return data;
      })
    )
  }
  getyourGames(person){
    return this.http.get(`http://localhost:3000/beer/game/yourgame/${person}`)
    .pipe(
      map((data:any) => {
        return data;
      })
    )
  }
  getyourQuest(){
    return this.http.get(`http://localhost:3000/beer/game/yourquest/${localStorage.getItem("email")}`)
    .pipe(
      map((data:any) => {
        return data;
      })
    )
  }
  getyourAnwsers(id){
    return this.http.get(`http://localhost:3000/beer/game/youranwsers/${id}`)
    .pipe(
      map((data:any) => {
        return data;
      })
    )
  }
}
