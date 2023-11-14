import { Component, Input } from '@angular/core';
import { PortfolioProjectComponent } from '../portfolio-project/portfolio-project.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @Input() showDetails: boolean = false;

}
