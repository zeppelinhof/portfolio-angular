import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FireMessagesService } from '../fire-messages.service';
import { Router } from '@angular/router';


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

  inputName: string = '';
  inputMaildaddress: string = '';
  inputMessage: string = '';
  missingName: Boolean = false;
  missingEmail: Boolean = false;
  resultEmail: boolean = false;
  missingMessage: Boolean = false;
  sendButtonClicked: Boolean = false;
  showCheckMessage: Boolean = false;

  constructor(private firemessage: FireMessagesService, private router: Router) { }


  sendToFirebase(name: string, mail: string, message: string) {
    this.sendButtonClicked = true;
    if (!this.isChecked) {
      this.showCheckMessage = true;
    }
    if (this.allFieldsFilled() && this.isChecked) {
      this.firemessage.addMessage({ 'Name': mail, 'Mailaddress': mail, 'Message': message });
      this.router.navigate(['/success-mail']);
    } else {
      this.checkEachInputfieldsIfFilled()
    }
  }

  allFieldsFilled(): Boolean {
    return this.inputName != '' && this.containsValidEmailPattern(this.inputMaildaddress) && this.inputMessage != '';
  }

  checkEachInputfieldsIfFilled(){
    if (this.inputName == '') {
      this.missingName = true;
      this.borderToRed('nf');
    }
    if (this.inputMaildaddress == '') {
      this.missingEmail = true;
      this.borderToRed('ef');
    }
    if (this.inputMessage == '') {
      this.missingMessage = true;
      this.borderToRed('mf');
    }
  }

  borderToRed(elementId: string) {
    document.getElementById(elementId)?.classList.add('border-red');

  }

  containsValidEmailPattern(input: string): boolean {
    const atIndex = input.indexOf('@');
    const dotIndex = input.lastIndexOf('.');
    this.resultEmail = atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < input.length - 1;
    return this.resultEmail;
  }


  changeCheckbox() {
    // this.isChecked == true ? false : true;
    if (this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }


  sendMail() {
    // console.log('Send mail:', this.myForm);
    // this.nameField.nativeElement.disabled == true;

    // let nameField = this.nameField.nativeElement;
    // let messageField = this.messageField.nativeElement;
    // let sendButton = this.sendButton.nativeElement;

    // nameField.disabled = true;
    // messageField.disabled = true;
    // sendButton.disabled = true;

    // event.preventDefault();
    // const data = new FormData(event.target);

    // fetch("https://formspree.io/f/xaygzdbb", {
    //   method: "POST",
    //   body: new FormData(event.target),
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // }).then(() => {
    //   window.location.href = "./success.html";
    // }).catch((error) => {
    //   console.log(error);
    // });

    // nameField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;

  }

  // sendMail(event: any) {
  //   debugger
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   fetch("https://formspree.io/f/xaygzdbb", {
  //     method: "POST",
  //     body: new FormData(event.target),
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   }).then(() => {
  //     window.location.href = "./success.html";
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }
}
