import { Component, OnInit } from '@angular/core';
import { LISTE_IMAGES } from '../app.component';

@Component({
  selector: 'app-image-liste',
  templateUrl: './image-liste.component.html',
  styleUrls: ['./image-liste.component.scss']
})
export class ImageListeComponent implements OnInit {


  tableauImages = LISTE_IMAGES;

  constructor() { }

  ngOnInit(): void {
  }

}
