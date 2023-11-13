import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private scrollservice: ScrollServiceService){}

  scroll(elementid:string){
    this.scrollservice.scrollTo(elementid);
  }

}
