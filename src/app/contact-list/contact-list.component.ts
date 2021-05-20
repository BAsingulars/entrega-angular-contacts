import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
  name?: String;
  email?: String;
  phoneNumber?: String;
  image?: String;
  color?: String;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Contact;
  contactFavorite = [];

  color: string;

  constructor() {
    this.newContact = {};
  }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    // add contact to contacts list
    this.contacts.push(this.newContact);
    // clear inputs
    this.newContact = {};
  }
  deleteContact(user) {
    // coge el index del usuario
    let index = this.contacts.indexOf(user);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
  favorite(contact) {
    if (!this.contactFavorite.includes(contact)) {
      this.contactFavorite.push(contact);
      console.log('fav');
      contact.color = 'rojo';
    } else {
      const index = this.contactFavorite.indexOf(contact);
      this.contactFavorite.splice(index, 1);
      console.log('no mas fav');
      contact.color = 'negro';
    }
  }
}
