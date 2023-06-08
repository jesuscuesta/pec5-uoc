import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getListPokemon(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon?limit=151');
  }

  getPokemon(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon/' + id);
  }

}
