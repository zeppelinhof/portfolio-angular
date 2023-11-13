import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-options',
  templateUrl: './contact-options.component.html',
  styleUrls: ['./contact-options.component.scss']
})
export class ContactOptionsComponent {
  images: string[] = [
    '../assets/img/git-Default.svg',
    '../assets/img/mail-Default.svg',
    '../assets/img/in-Default.svg'
  ];
}
