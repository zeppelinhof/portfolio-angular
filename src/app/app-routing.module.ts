import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { SuccessMailComponent } from './success-mail/success-mail.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'success-mail', component: SuccessMailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
