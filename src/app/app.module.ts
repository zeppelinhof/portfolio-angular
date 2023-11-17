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
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SuccessMailComponent } from './success-mail/success-mail.component';

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
    MainpageComponent,
    ContactFormComponent,
    DataProtectionComponent,
    HamburgerMenuComponent,
    SuccessMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"portfolio-4470b","appId":"1:45401461044:web:36e3d17cac1647b605d561","storageBucket":"portfolio-4470b.appspot.com","apiKey":"AIzaSyDT6uHYQjMqr8NjFW5kpDcJEf3Oh4HDnzQ","authDomain":"portfolio-4470b.firebaseapp.com","messagingSenderId":"45401461044"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
