import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  usuario = { userName: 'Luciano Barbosa', icone: 'remember_me' };
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Melhor livro de Janeiro', img: '../../assets/imagens/1.png', cols: 1, rows: 1 },
          { title: 'Dica dos leitores', img: '../../assets/imagens/2.png', cols: 1, rows: 1 },
          { title: 'O mais comentados da semana', img: '../../assets/imagens/3.png', cols: 1, rows: 1 },
          { title: 'Indicação do Tiime BookShelf', img: '../../assets/imagens/4.png', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Melhor livro de Janeiro', img: '../../assets/imagens/1.png', cols: 2, rows: 1 },
        { title: 'Dica dos leitores', img: '../../assets/imagens/2.png', cols: 1, rows: 1 },
        { title: 'O mais comentados da semana', img: '../../assets/imagens/3.png', cols: 1, rows: 2 },
        { title: 'Indicação do Tiime BookShelf', img: '../../assets/imagens/4.png', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
