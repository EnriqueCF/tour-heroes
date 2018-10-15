import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',                 // selector CSS & HTML element
  templateUrl: './heroes.component.html', // path HTML
  styleUrls: ['./heroes.component.css']   // private style
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  heroeSeleccionado: Hero;

  constructor() { }

  ngOnInit() {  // lifecycle hook
  }

  onSelect(heroe: Hero):void {
    this.heroeSeleccionado = heroe;
    console.log (heroe.name+heroe.id);
  }
}
