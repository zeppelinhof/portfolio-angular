import { Component } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor(private scrollservice: ScrollServiceService){}

  logos: String[] = [
    '../../assets/img/language_logo/javascript_logo.svg',
    '../../assets/img/language_logo/git_logo.svg',
    '../../assets/img/language_logo/scrum_logo.svg',
    '../../assets/img/language_logo/materialdesign_logo.svg',
    '../../assets/img/language_logo/angular_logo.svg',
    '../../assets/img/language_logo/firebase_logo.svg',
    '../../assets/img/language_logo/api_logo.svg',
    '../../assets/img/language_logo/typescript_logo.svg',
    '../../assets/img/language_logo/css_logo.svg',
    '../../assets/img/language_logo/html_logo.svg'
  ];

  logos_name: String[] = [
    'JavaScript',
    'GIT',
    'Scrum',
    'Material design',
    'Angular',
    'Firebase',
    'Rest-Api',
    'TypeScript',
    'CSS',
    'HTML'
  ];

  scroll(elementid:string){
    this.scrollservice.scrollTo(elementid);
  }

}
