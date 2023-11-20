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
    'Jump-and-run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Salsa-Flaschen zu finden, um gegen die verrückte Henne zu kämpfen.',
    'Aufgabenmanager - inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    'Ein sehr einfaches Customer-Relationship-Management-System, das mit CRUD-Funktionalität arbeitet.'
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
    ''   // to be changed to Simple CRM    
  ]

  public livetestLinks: string[] = [
    'http://markus-gede.developerakademie.net/el_pollo_loco/index.html',
    'http://markus-gede.developerakademie.net/Join-Markus/index.html',
    ''
  ]
}
