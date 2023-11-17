import { Component, Input } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showBurgerMenu: Boolean = false;
  @Input() burgerMenuOpen: Boolean = false;

  constructor(private scrollservice: ScrollServiceService) { }

  scroll(elementid: string) {
    this.scrollservice.scrollTo(elementid);
  }

  showHamburgerMenu() {
    if (this.showBurgerMenu == true) {
      this.showBurgerMenu = false;
    } else {
      this.showBurgerMenu = true;
    }
  }

}
