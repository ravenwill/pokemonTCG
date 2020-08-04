import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsPokemon, ResponsePokemon } from 'src/app/models/pokemon/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  public pokemon: CardsPokemon;
  public idPokemon: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.idPokemon = this._activatedRoute.snapshot.params['id'];
    this.carregardadosPokemon();
  }

  public carregardadosPokemon() {
    this._pokemonService.detalhes(this.idPokemon).subscribe(
      (res: ResponsePokemon) => this.pokemon = res.cards[0]
    );
  }

}
