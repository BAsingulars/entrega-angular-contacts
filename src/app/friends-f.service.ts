import { Injectable, OnInit } from '@angular/core';
import contactList from './contacts';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FriendsFService implements OnInit {
  isFavorito: boolean;
  contacts: Object[];

  constructor() { }

  ngOnInit(){
    this.contacts = contactList;
  }
  favFriend(){
    Swal.fire('You have added your friend to favorites');
    // document.getElementById("star").className ='bi bi-star-fill filled icon';
  }

  callFriend(){
    Swal.fire('Now you are calling your friend')
  }

  mailFriend(){
    Swal.fire('Now you are writing to your friend')
  }

  imageFriend(){
    Swal.fire({
      imageUrl: '{{contact.image}}',
      imageHeight: 250,
      imageAlt: 'A tall image'
    })
  }
}
