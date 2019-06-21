import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private messagesService: MessagesService
  ) { }

  getPokemons(): Observable<Pokemon[]> {
    this.messagesService.add("Pokemon Service: fetched pokemons")
    return of(POKEMONS);

  }
}
