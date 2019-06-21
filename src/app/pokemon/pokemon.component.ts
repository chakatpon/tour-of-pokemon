import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { PokemonService } from '../pokemon.service';


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
  pokemons: Pokemon[];

  selectedPokemon: Pokemon;


  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  onSelectPokemon(pokemon): void {
    this.selectedPokemon = pokemon;
    console.log("this is seleted pokemon : ", this.selectedPokemon.name)
  }

  getPokemons(): void {
   this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons)
  }
} 
