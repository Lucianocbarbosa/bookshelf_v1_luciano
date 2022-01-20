import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegador } from './../modelosInterface/menu-navegador';
import { NavegacaoService } from './../servicosInterface/navegacao.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //Itens co menu principal.
  tituloNav = 'BookShelf v1';
  //Itens de icones e imagens de navegação.
  iconeGeral = '../../assets/imagens/ShelfBook.png';
  lIcone = 80;
  aIcone = 80;
  //Controle das rotas do menu.
  itensMenu$: Observable<MenuNavegador[]>
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private telaLogin: MatDialog,
    private navegadorService: NavegacaoService
  ) {
    this.itensMenu$ = navegadorService.listagemMenu()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
  }

  abrirLogin(erroMsg: string) {
    this.telaLogin.open(AppLoginComponent, {
      data: erroMsg
    })
  }
}
