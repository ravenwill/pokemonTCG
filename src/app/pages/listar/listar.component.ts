import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { ResponsePokemon, CardsPokemon } from 'src/app/models/pokemon/pokemon.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public pokemons: CardsPokemon[] = [];

  public formSearch: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.listarTudo();
  }

  public listarTudo() {
    this._pokemonService.listarTudo().subscribe(
      (res: ResponsePokemon) => {
        res.cards.sort ((a, b) => { 
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        this.pokemons = res.cards;
      }
    );
  }

  public procurarPokemon() {
    this._pokemonService.filtrar(this.formSearch.value.name).subscribe(
      (res: ResponsePokemon) => {
        res.cards.sort ((a, b) => { 
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        });
        this.pokemons = res.cards;
      }
    );
  }

}
