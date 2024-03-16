import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FireMessagesService } from '../fire-messages.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Input() isChecked: boolean = false;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('#nameField') nameField!: ElementRef;
  @ViewChild('#messageField') messageField!: ElementRef;
  @ViewChild('#sendButton') sendButton!: ElementRef;
  @ViewChild('f') signupForm!: NgForm;
  user = {
    username: '',
    email: '',
    message: ''
  }

  inputName: string = '';
  inputMaildaddress: string = '';
  inputMessage: string = '';
  resultEmail: boolean = false;
  sendButtonClicked: Boolean = false;
  showCheckMessage: Boolean = false;
  messageId: string = new Date().toLocaleString();

  constructor(private firemessage: FireMessagesService, private router: Router) { }


  sendToFirebase(name: string, mail: string, message: string) {
    this.sendButtonClicked = true;
    if (!this.isChecked) {
      this.showCheckMessage = true;
    }
    if (this.signupForm.valid && this.isChecked) {
      this.firemessage.addMessage({ 'Name': name, 'Mailaddress': mail, 'Message': message }, name + ': ' + this.messageId);
      this.router.navigate(['/success-mail']);
     }
  }



  changeCheckbox() {
    if (this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
      this.showCheckMessage = false;
    }
  }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email
    this.user.message = this.signupForm.value.userData.message;

    this.firemessage.addMessage({
      'Name': this.user.username,
      'Mailaddress': this.user.email,
      'Message': this.user.message
    },    
      this.user.username + ': ' + this.messageId);
      debugger
    this.router.navigate(['/success-mail']);

    this.signupForm.reset();
  }
}
