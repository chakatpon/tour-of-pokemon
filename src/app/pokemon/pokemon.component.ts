import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon'
import { POKEMONS } from '../mock-pokemons'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon = {
    id: 1,
    name: "Cubone",
    imgURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"
  }
  pokemons: Pokemon[] = POKEMONS;
  selectedPokemon: Pokemon;


  constructor() { }

  ngOnInit() {
  }

  onSelectPokemon(pokemon): void {
    this.selectedPokemon = pokemon;
    console.log("this is seleted pokemon : ", this.selectedPokemon.name)
  }
}
