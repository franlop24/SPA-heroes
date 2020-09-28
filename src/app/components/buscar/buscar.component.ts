import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
              private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes(this.termino);
      console.log(this.heroes);
    } );
  }

}
