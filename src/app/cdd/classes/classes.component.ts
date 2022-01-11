import { Component, OnInit } from '@angular/core';

import { Generos } from './../modelos/generos';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  public livrosGeneros: Generos[] = [];

  visaoColunas = ['_idGenero', 'nomeGenero', 'decimalGenero', 'livrosGenero'];

  constructor() { }

  ngOnInit(): void { }
}
