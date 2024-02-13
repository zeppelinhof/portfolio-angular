import { Component, HostListener, Input } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent {

  screenWidth: number;
  @Input() projectIndex: number = 0;

  constructor(){
    this.screenWidth = window.innerWidth;
  }

  public imagesComputers: string[] = [
    'assets/img/projects/laptop_ohne_Hintergrund/pollo_loco_begin.svg',
    'assets/img/projects/laptop_ohne_Hintergrund/join_begin.svg',
    'assets/img/projects/laptop_ohne_Hintergrund/dabubble.svg'
  ];

  public projTitle: string[] = [
    'El Pollo Loco',
    'Join',
    'DABubble'
    // 'Pokedex',
    
  ];

  public projExplTxt: string[] = [
    'Jump-and-run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Salsa-Flaschen zu finden, um gegen die verrückte Henne zu kämpfen.',
    'Aufgabenmanager - inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    'Instant-Messaging-Dienst. Hier können in Direct-Chats und Channels Textnachrichten und Bilder ausgetauscht werden.'
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
    'https://github.com/zeppelinhof/DaBubble_Markus'  
  ]

  public livetestLinks: string[] = [
    'http://markus-gede.developerakademie.net/el_pollo_loco/index.html',
    'http://markus-gede.developerakademie.net/Join-Markus/index.html',
    'http://markus-gede.developerakademie.net/angular-projects/da-bubble/index.html'
  ]

  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
  }

  isScreenSizeLessThan900(): boolean {
    return this.screenWidth < 900;
  }

  openLink(event: Event): void {
    debugger
    if (this.isScreenSizeLessThan900()) {
      const livetestLink = this.livetestLinks[this.projectIndex];
      if (livetestLink) {
        window.open(livetestLink, '_blank');
      }
    }
  }
}
