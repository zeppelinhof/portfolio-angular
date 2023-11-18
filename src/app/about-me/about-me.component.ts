import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public amContent: string[] =
    ['Ich besitze bereits ein Bachelorstudium der Wirtschaftsinformatik. Dies habe ich im Rahmen meines dualen Studiums bei der damaligen Postbank Systems in Bonn gemacht.',
      'In meiner Freizeit lese ich gerne gute Bücher oder gehe mit meiner lieben Ehefrau im schönen nahegelegenen Wald spazieren.'];
  public images: string[] = ['assets/img/bulb_desktop.svg', 'assets/img/puzzle_desktop.svg'];
}
