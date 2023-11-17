import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {
  showBurgerMenuChild: Boolean = false;

  constructor(private scrollservice: ScrollServiceService) {}

  scroll(elementid: string) {
    this.showBurgerMenuChild = false;
    this.scrollservice.scrollTo(elementid);
  }

}
