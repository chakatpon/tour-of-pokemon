import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonURL = 'api/pokemons'

  constructor(
    private messagesService: MessagesService,
    private http: HttpClient
  ) { }

  getPokemon(id: number): Observable<Pokemon> {
    this.messagesService.add(`Pokemon Service: fetched pokemon id=${id}`)
    return of(POKEMONS.find(pokemon => { return pokemon.id === id}))
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonURL);
  }

  // getPokemons(): Observable<Pokemon[]> {
  //   this.messagesService.add("Pokemon Service: fetched pokemons")
  //   return of(POKEMONS);
  // }

  private log(message: string) {
    this.messagesService.add(`Pokemon Service: ${message}`);
  }
}
