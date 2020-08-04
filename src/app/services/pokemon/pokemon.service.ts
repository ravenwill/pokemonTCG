import { ResponsePokemon } from '../../models/pokemon/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  listarTudo(): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemonTCG}/cards`);
  }

  filtrar(name): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemonTCG}/cards?name=${name}`);
  }

  detalhes(id): Observable<ResponsePokemon> {
    return this.http.get<ResponsePokemon>(`${environment.apiPokemonTCG}/cards?id=${id}`);
  }

  
}
