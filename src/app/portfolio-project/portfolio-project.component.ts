import { Component, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent {

  @Input() projectIndex: number = 0;

  public imagesComputers: string[] = [
    'assets/img/projects/laptop_ohne_Hintergrund/pollo_loco_begin.svg',
    'assets/img/projects/laptop_ohne_Hintergrund/join_begin.svg',
    'assets/img/projects/laptop_ohne_Hintergrund/crm_begin.svg'
    // 'assets/img/projects/laptop_ohne_Hintergrund/pokedex_begin.svg'
  ];

  public projTitle: string[] = [
    'El Pollo Loco',
    'Join',
    'Simple CRM'
    // 'Pokedex',
    
  ];

  public projExplTxt: string[] = [
    'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    'A very Simple Customer Relationship Management system working with CRUD functionality.'
    // 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.'
  ];

  public usedLang: string[] = [
    'JavaScript | HTML | CSS',
    'Angular | TypeScript | HTML | CSS | Firebase',
    'Angular | Firebase'
    // 'JavaScript | HTML | CSS | Api ',
  ];

  public gitLinks: string[] = [
    'https://github.com/zeppelinhof/el_pollo_loco.git',
    'https://github.com/zeppelinhof/Join-Markus.git',
    'https://github.com/zeppelinhof/Join-Markus.git'   // to be changed to Simple CRM    
  ]

  public livetestLinks: string[] = [
    'http://markus-gede.developerakademie.net/el_pollo_loco/index.html',
    'http://markus-gede.developerakademie.net/Join-Markus/index.html',
    'http://markus-gede.developerakademie.net/Join-Markus/index.html'
  ]
}
