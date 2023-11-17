import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild(HamburgerMenuComponent)

  hamburgermenu!: HamburgerMenuComponent;
  showBurgerMenuParent: Boolean = false;

  ngAfterViewInit() {
    if (this.hamburgermenu) {
      this.showBurgerMenuParent = this.hamburgermenu.showBurgerMenuChild;
      console.log('showBurgerMenu:', this.showBurgerMenuParent);
    }
  }

  constructor(private scrollservice: ScrollServiceService) { }


  scroll(elementid: string) {
    this.scrollservice.scrollTo(elementid);
  }

  showHamburgerMenu() {
    if (this.showBurgerMenuParent == true) {
      this.showBurgerMenuParent = false;
    } else {
      this.showBurgerMenuParent = true;
    }
  }

}
