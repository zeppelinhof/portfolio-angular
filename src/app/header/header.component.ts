import { Component, ViewChild, OnInit } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // @ViewChild(HamburgerMenuComponent)

  constructor(private scrollservice: ScrollServiceService) { }
  showVar: ObserversModule = this.scrollservice.data$;

  ngOnInit() {
    this.scrollservice.data$.subscribe((data) => {
      this.showVar = data;
    });
  }


  scroll(elementid: string) {
    this.scrollservice.scrollTo(elementid);
  }

  menuChange() {
    if (this.showVar == true) {
      this.scrollservice.updateData(false);
    } else {
      this.scrollservice.updateData(true);
    }
  }



}
