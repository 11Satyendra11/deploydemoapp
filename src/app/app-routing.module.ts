import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'contactus', component: ContactusComponent},
  {path:'', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ContactusComponent,HomeComponent,AboutusComponent]
export default routes;