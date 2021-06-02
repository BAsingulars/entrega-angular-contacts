import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

interface Contact {
  name: String;
  email: String;
  phoneNumber: String;
  image: String ;
}
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  favorites: Object[];
  newContact: Contact = {
    name: "",
    email: "",
    phoneNumber: "",
    image: ""
  };

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.favorites = [];
  }

  addContact(contact:Contact){
    // add contact to contacts list
    this.contactService.addContact(contact);

    // clear inputs
    this.handleClear();
  }

  handleClear() {
    this.newContact.name = "";
    this.newContact.email = "";
    this.newContact.phoneNumber = "";
    this.newContact.image = "";
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