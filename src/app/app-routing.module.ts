import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'imprint', component: ImprintComponent}
];


// <app-above-the-fold></app-above-the-fold>
// <app-about-me></app-about-me>
// <app-skills></app-skills>
// <app-portfolio></app-portfolio>
// <app-contact></app-contact>
// <app-footer></app-footer>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
