import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: []
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {
   }

  ngOnInit() {
    
  }

}
