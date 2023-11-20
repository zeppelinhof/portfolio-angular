import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-contact-options',
  templateUrl: './contact-options.component.html',
  styleUrls: ['./contact-options.component.scss']
})
export class ContactOptionsComponent {
  constructor(private scrollservice: ScrollServiceService){}
  images: string[] = [
    'assets/img/git-Default.svg',
    'assets/img/mail-Default.svg',
    'assets/img/in-Default.svg'
  ];

  links: string[] = [
    'contact',
    'contact',
    'contact'
  ];

  scroll(elementid:string){
    this.scrollservice.scrollTo(elementid);
  }
}
