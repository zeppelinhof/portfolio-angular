import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  constructor(private scrollservice: ScrollServiceService) {

  }

  scroll(elementid: string) {
    this.scrollservice.scrollTo(elementid);

  }

}
