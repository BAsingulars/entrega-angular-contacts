import { Injectable } from '@angular/core';
import  contactList  from '../contacts';
import { Contact } from '../../interfaces/contact';


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
}
