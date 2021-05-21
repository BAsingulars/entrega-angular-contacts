import { Component, OnInit } from '@angular/core';
import favoriteList from '../favorites';
import { FriendsFService } from '../friends-f.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites:Object[];

  constructor(private FriendsFService:FriendsFService) { }

  ngOnInit(): void {
    this.favorites = favoriteList
  }
  
  favFriend(){
    this.FriendsFService.favFriend();
  }

  callFriend(){
    this.FriendsFService.callFriend();
  }

  mailFriend(){
    this.FriendsFService.mailFriend();
  }
  
  imageFriend(){
    this.FriendsFService.imageFriend();
  }

}
