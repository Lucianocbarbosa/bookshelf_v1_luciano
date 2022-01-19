import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { MenuNavegador } from '../modelosInterface/menu-navegador';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  private readonly uriAPI = '../../assets/menuNavegador.json';

  constructor(private menuDados: HttpClient) { }

  listagemMenu() {
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
      .pipe(
        first(),
        tap(apiMenu => apiMenu)
      )
  }
}
