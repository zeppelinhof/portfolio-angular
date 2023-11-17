import { Component, ElementRef, Input, ViewChild } from '@angular/core';

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


  changeCheckbox() {
    // this.isChecked == true ? false : true;
    if (this.isChecked) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }


  sendMail() {
    console.log('Send mail:', this.myForm);
    this.nameField.nativeElement.disabled == true;

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
