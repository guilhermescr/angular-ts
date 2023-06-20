import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { TestingAngularMaterialComponent } from './testing-angular-material.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [TestingAngularMaterialComponent, PokemonCardComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule],
})
export class AngularMaterialModule {}
