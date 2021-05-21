import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import contactList from '../contacts';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FriendsFService } from '../friends-f.service';


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
  closeModal: string;
  contacts: Object[];
  state = true;
  newContact: Contact = {
    name: '',
    email: '',
    phoneNumber: '',
    image: ''
  };
  dataSource;
  displayedColumns
  modal: any;
  isFavorito: boolean;

  constructor(private modalService: NgbModal, private FriendsFService: FriendsFService) { }

  ngOnInit() {
    this.contacts = contactList;
  }

  callFriend() {
    this.FriendsFService.callFriend();
  }

  mailFriend() {
    this.FriendsFService.mailFriend();
  }

  imageFriend() {
    this.FriendsFService.imageFriend();
  }


  favFriends() {
    this.state = !this.state
    if (this.state === true) {
      document.getElementById('fav').className = 'bi bi-star icon'
    } else {
      document.getElementById('fav').className = 'bi bi-star-fill icon filled'
    }
    
  }




  triggerModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addContact() {
    // add contact to contacts list
    this.contacts.push({ name: this.newContact.name, email: this.newContact.email, phoneNumber: this.newContact.phoneNumber, image: this.newContact.image });
    // clear inputs
    this.newContact.name = '';
    this.newContact.email = '';
    this.newContact.phoneNumber = '';
    this.newContact.image = '';
    Swal.fire('Contact added!');
    this.modal.dismiss('Cross click')
  }


  deleteItem(contact) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your imaginary friend has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary friend is safe :)',
          'error'
        )
      }
    })
  }
}