import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

  scrollTo(elementid:string) {
    debugger
    const element = document.getElementById(elementid);
    if (element) {
      const offset = 200;
      const targetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}
