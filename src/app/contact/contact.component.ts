import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
@Input() isChecked: boolean = false;


changeCheckbox(){
  // this.isChecked == true ? false : true;
  if (this.isChecked) {
    this.isChecked = false;
  } else{
    this.isChecked = true;
  }
}

}
