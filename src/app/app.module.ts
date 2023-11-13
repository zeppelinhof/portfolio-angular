import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlurBackgroundComponent } from './blur-background/blur-background.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { ContactComponent } from './contact/contact.component';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { FooterComponent } from './footer/footer.component';
import { ContactOptionsComponent } from './contact-options/contact-options.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    BlurBackgroundComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioProjectComponent,
    ContactComponent,
    FooterComponent,
    ContactOptionsComponent,
    ImprintComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
