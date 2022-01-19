import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Dashboard } from '../modelosInterface/dashboard';
import { DashboardService } from './../servicosInterface/dashboard.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>;
  usuario = { userName: 'Luciano Barbosa', icone: 'remember_me' };
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [

        ];
      }

      return [
        this.cards$
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService
  ) {
    this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
  }
}
