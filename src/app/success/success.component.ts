import { GameList } from './../model/GameList.model';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';
import { GameListService } from '../service/game-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  CardBalance:number = 600;

  games:GameList[];
  constructor(private gameservice:GameListService,private http:HttpClient) { }

  // games list is displayed by using this method
  ngOnInit() {
    this.gameservice.getGameList().subscribe((data:GameList[])=>{this.games=data});
    console.log(this.games);
  }
  getGameListbyid(SerialNo:number){
    this.gameservice.getGameListByid(SerialNo).subscribe((data:GameList[])=>{this.games=data});
  }
  

}
