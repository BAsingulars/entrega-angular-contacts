import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../contacts';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  alphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  newContact: Contact = {
    name: "",
    email: "",
    phoneNumber: "",
    image: ""
  };

  //shows form modal!
  display:boolean;

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.display = false;
  }

  openModal() { 
    /* shows modal or not */
    this.display = !this.display; 
  }

  addContact(contact:Contact){
    // add contact to contacts list
    this.contactService.addContact(contact);
    console.log(contact);

    // clear inputs
    this.handleClear();
    this.openModal();
  }

  handleClear() {
    this.newContact.name = "";
    this.newContact.email = "";
    this.newContact.phoneNumber = "";
    this.newContact.image = "";
  }

}
