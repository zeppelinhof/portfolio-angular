import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public amContent: string[] =
    ['Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      'This is other personal thing to share(...) It is windy. Here I will add some text and this will appear on my curriculum vitae. Thats just to test and so on.'];
  public images: string[] = ['../../assets/img/bulb_desktop.svg', '../../assets/img/puzzle_desktop.svg'];
}
