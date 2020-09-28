import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _heroeService:HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this._heroeService.buscarHeroes(termino);
  }
}
