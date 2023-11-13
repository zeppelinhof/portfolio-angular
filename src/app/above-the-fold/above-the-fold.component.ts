import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {

  constructor(private scrollservice: ScrollServiceService){}

  scroll(elementid:string){
    this.scrollservice.scrollTo(elementid);
  }
  
}
