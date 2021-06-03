import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../contacts';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  favorites: Object[];
  
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.favorites = this.contactService.getFavorites();
  }

  delete(contact:Contact) { 
    this.contacts = this.contacts.filter(c => c !== contact); 
  }

  addFavorite(contact:Contact) {
    const newFavorite = { ...contact};

    //if favorite includes the contact we just added:
    this.favorites.includes(contact)? this.favorites = this.favorites.filter(f => f!== contact) : this.favorites.push(newFavorite); 
  }

}