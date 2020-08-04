import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarRoutingModule } from './listar-routing.module';
import { ListarComponent } from './listar.component';

import { PokemonService } from './../../services/pokemon/pokemon.service'


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    ListarRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    PokemonService
  ]
})
export class ListarModule { }
