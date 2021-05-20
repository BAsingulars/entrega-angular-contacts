import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
  name?: String;
  email?: String;
  phoneNumber?: String;
  image?: String;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Contact;

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
    console.log(user);
    let index = this.contacts.indexOf(user);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
