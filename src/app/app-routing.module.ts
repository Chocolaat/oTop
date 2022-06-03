import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { ImageListeComponent } from './image-liste/image-liste.component';
import { JeuComponent } from './jeu/jeu.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'imageListe', component: ImageListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
