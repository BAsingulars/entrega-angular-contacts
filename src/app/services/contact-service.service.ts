import { Injectable } from '@angular/core';
import  contactList  from '../contacts';
import { Contact } from '../../interfaces/contact';
import contacts from '../contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[]{
    return contactList;
  }

  addContactToList(newContact:Contact){
    contactList.push(newContact);
  }

  removeContactList(contact:Contact){
    const index = contactList.indexOf(contact);
    contactList.splice(index,1);
  }

  addFav(contact:Contact){
    const index = contactList.indexOf(contact);
    contactList[index].isFav = contactList[index].isFav ? false : true;
  }
}
