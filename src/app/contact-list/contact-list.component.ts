import { Component, Input, OnInit } from '@angular/core';
// import contactList from '../contacts';
import { ContactService } from '../services/contact-service.service';
import { Contact } from '../../interfaces/contact'

// interface Contact {
//     name: String;
//     email: String;
//     phoneNumber: String;
//     image: String ;
// }

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

  constructor(private contactServ:ContactService) { }

  ngOnInit() {
    //SIN SERVICIO:
    //this.contacts = contactList;

    //CON SERVICIO:
    this.contacts = this.contactServ.getContacts();
    console.log(this.contacts);
  }

  addContact(){
    // add contact to contacts list
    const contactoNuevo: Contact = {
      name: this.newContact.name,
      email: this.newContact.email,
      phoneNumber: this.newContact.phoneNumber,
      image: this.newContact.image
    };
    this.contactServ.addContactToList(contactoNuevo);
    console.log(this.contacts);
    // clear inputs
    this.clearInputs();
  }

  clearInputs(): void{
    this.newContact = {} as Contact;
  }

  removeContact(contact:Contact){
    this.contactServ.removeContactList(contact);
  }

}
