import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import contactList from '../contacts';

interface Contact {
  name: String;
  email: String;
  phoneNumber: String;
  image: String;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Contact = {
    name: '',
    email: '',
    phoneNumber: '',
    image: ''
  };
  dataSource;
  displayedColumns

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact() {
    // add contact to contacts list
    this.contacts.push({ name: this.newContact.name, email: this.newContact.email, phoneNumber: this.newContact.phoneNumber, image: this.newContact.image });

    // clear inputs
    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
    this.newContact.image = '';
  }

  deleteItem(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}