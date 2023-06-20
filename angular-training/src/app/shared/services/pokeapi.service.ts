import { Results } from './../models/pokeApi-results.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private pokeApiUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=30';

  private pokeApiResultsSubject: BehaviorSubject<Results | null> =
    new BehaviorSubject<Results | null>(null);
  public pokeApiResults: Observable<Results | null> =
    this.pokeApiResultsSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchPokeData(): void {
    this.http.get(this.pokeApiUrl).subscribe((response: any) => {
      this.pokeApiResultsSubject.next(response);
    });
  }

  fetchPokemonList() {
    return this.pokeApiResultsSubject.value?.results.map(
      ({ url }: { name: string; url: string }) => this.http.get(url)
    );
  }

  getPokeApiResults(): Observable<Results | null> {
    return this.pokeApiResults;
  }

  capitalize(pokemonName: string): string {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  }
}
