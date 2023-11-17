import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  showBurgerMenu: Boolean = false;
  private dataSubject = new BehaviorSubject<Boolean>(false);
  public data$ = this.dataSubject.asObservable();

  updateData(newData: Boolean) {
    this.dataSubject.next(newData);
  }

  constructor() { }

  scrollTo(elementid: string) {
    this.updateData(false);  // for closung gray burger menu

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
