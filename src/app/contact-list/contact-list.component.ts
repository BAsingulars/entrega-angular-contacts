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
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Contact = {
    name: "",
    email: "",
    phoneNumber: "",
    image: ""
  };


  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
    console.log(this.contacts);
  }

  addContact(){
    // add contact to contacts list


    // clear inputs
  }

  delete(contact:Contact) {
    this.contacts = this.contacts.filter(c => c !== contact);
  }
}