import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
              private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService,
              private route: Router ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    } );
  }

  verHeroe(idx:number){
    this.route.navigate( ['/heroe', idx] );
  }

}
