import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {

  // Itens do menu principal
  tituloNav = 'BookShelf v1';
  usuario = { userName: "Luciano Barbosa", icone: "remember_me" }
  tituloBarra = '[Sua Estante Virtual]';
  iconeGeral = '../../assets/imagens/ShelfBook.png';
  lIcone = 80;
  aIcone = 80;
  // Controles das rotas do menu.
  itensMenu = [
    { linkMenu: '/cdd', labelMenu: 'Classes Dewey', hab: true },
    { linkMenu: '/feed', labelMenu: 'Feed Notícias', hab: true },
    { linkMenu: '/clube', labelMenu: 'Página Usuário', hab: false },
    { linkMenu: '/leitura', labelMenu: 'Clubes e Leitura', hab: false },
    { linkMenu: '/estante', labelMenu: 'Estante Particular', hab: false }
  ]


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
