import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: []
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) {
   }

  ngOnInit() {
    this.getPokemon()
  }

  goBack(): void {
    this.location.back();
  }

  getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id)
      .subscribe(pokemon => {
        this.pokemon = pokemon
      })
    
  }

}
