import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private urlAPI = '/assets/generos.json';

  constructor() { }
}
