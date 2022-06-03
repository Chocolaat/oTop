import { Component, OnInit } from '@angular/core';
import { LISTE_IMAGES } from '../app.component';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {


  imageCourranteIdx=0;
  imageCourrante=LISTE_IMAGES[this.imageCourranteIdx];
  jeuEnCours= false;
  resultats=false;


  resultatsSaisFaire: string[] = [];
  resultatsSaisPasfaire: string[] = [];
  resultatsAvecAide: string[] = []; 


  totalImages = LISTE_IMAGES.length;

  constructor() { }

  ngOnInit(): void {
  }

  lancerLeJeu() {
    this.jeuEnCours = true;
    this.resultats = false;
  }

  terminerLeJeu() {
    this.jeuEnCours = false;
    this.resultats = true;
  }

  
  choixSuivant() {
    this.imageCourranteIdx++;
    this.imageCourrante=LISTE_IMAGES[this.imageCourranteIdx];
  }


  choixSaisFaire() {
    this.resultatsSaisFaire.push(this.imageCourrante);
    this.choixSuivant();
  }

  choixSaisPasFaire() {
    this.resultatsSaisPasfaire.push(this.imageCourrante);
    this.choixSuivant();
  }

  choixAvecAide() {
    this.resultatsAvecAide.push(this.imageCourrante);
    this.choixSuivant();
  }

}
