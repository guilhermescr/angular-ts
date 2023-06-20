import { Component } from '@angular/core';
import { PokeapiService } from '../shared/services/pokeapi.service';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-testing-angular-material',
  templateUrl: './testing-angular-material.component.html',
  styleUrls: ['./testing-angular-material.component.scss'],
})
export class TestingAngularMaterialComponent {
  pokemonList: Pokemon[] = [];

  constructor(private pokeApiService: PokeapiService) {
    this.fetchPokeApiResults();
  }

  ngOnInit(): void {
    this.pokeApiService.getPokeApiResults().subscribe((results) => {
      if (results) {
        this.fetchPokemonList();
      }
    });
  }

  fetchPokeApiResults(): void {
    this.pokeApiService.fetchPokeData();
  }

  fetchPokemonList(): void {
    this.pokeApiService.fetchPokemonList()?.forEach((pokemon) => {
      pokemon.subscribe((pokemonData: any) => {
        const pokemon: Pokemon = {
          name: this.pokeApiService.capitalize(pokemonData.name),
          imgUrl: pokemonData.sprites.front_default,
          types: pokemonData.types.map(
            (typesObject: any) => typesObject.type.name
          ),
        };
        this.pokemonList.push(pokemon);
      });
    });
  }
}
