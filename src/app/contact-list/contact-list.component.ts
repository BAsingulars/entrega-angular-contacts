import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

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

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
    this.favorites = contactList;

    console.log(`favorites arr: ${this.favorites.length}`);
  }

  addContact(contact:Contact){
    // add contact to contacts list
    contact.image == ""? contact.image = "http://svgur.com/i/7aS.svg" : contact.image = contact.image;
    const newContact = { ...contact };
    this.contacts.push(newContact);

    // clear inputs
    this.handleClear();
  }

  addFavorite(contact:Contact) {
    //if favorite doesn't exist:
    const newFavorite = { ...contact};
    this.favorites.push(newFavorite);

    //if favorite exists already:
    // this.favorites = this.favorites.filter(f => f!== contact);
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
}