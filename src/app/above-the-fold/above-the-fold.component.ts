import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  images: string[] = [
    '../assets/img/git-Default.svg',
    '../assets/img/mail-Default.svg',
    '../assets/img/in-Default.svg'
  ];

}
