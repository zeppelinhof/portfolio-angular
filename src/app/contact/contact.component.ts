import { Component, Input } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private scrollservice: ScrollServiceService) { }

  scroll(elementid: string) {
    this.scrollservice.scrollTo(elementid);
  }

}
