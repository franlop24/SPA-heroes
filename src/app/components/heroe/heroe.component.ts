import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroeService: HeroesService) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = _heroeService.getHeroe(params['id']);
      console.log(this.heroe);
      ;
    } )
  }

  ngOnInit(): void {
  }

}
