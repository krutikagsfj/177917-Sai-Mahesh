
// service layer is created and used to extract the data by using the functions
import { GameList } from './../model/GameList.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private http:HttpClient) { }
  baseurl:string='http://localhost:3000/Games';
 
  getGameList(){
    return this.http.get<GameList[]>(this.baseurl);
  }
  getGameListByid(SerialNo:number){
    return this.http.get<GameList[]>(this.baseurl+'/'+SerialNo)
  }
  
  
  
}
