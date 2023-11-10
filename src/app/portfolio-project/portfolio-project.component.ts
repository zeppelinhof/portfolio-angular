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
    '../../assets/img/projects/laptop_ohne_Hintergrund/pollo_loco_begin.svg',
    '../../assets/img/projects/laptop_ohne_Hintergrund/join_begin.svg',
    '../../assets/img/projects/laptop_ohne_Hintergrund/crm_begin.svg',
    '../../assets/img/projects/laptop_ohne_Hintergrund/pokedex_begin.svg'
  ];

}
