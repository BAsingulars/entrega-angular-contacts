import { Injectable } from '@angular/core';
import contacts from '../contacts';
import { Contact } from '../contacts';

// [
//   {
//     name: 'Yuumi',
//     email: 'yuumizilla@gmail.com',
//     phoneNumber: '(+34) 647 345 015',
//     image: "https://avatars.githubusercontent.com/u/69478059?v=4"
//   }
// ];

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  contactList: Contact[];

  constructor() { }
  
  //get contact list
  getContacts() {
    this.contactList = contacts;
    return this.contactList;
  }

  addContact(contact:Contact) {
    // add contact to contacts list
    contact.image == ""? contact.image = "http://svgur.com/i/7aS.svg" : contact.image = contact.image;
    const newContact = { ...contact };
    contacts.push(newContact);
  }
}
