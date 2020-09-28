import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() index: number;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    this.route.navigate( ['/heroe', this.index] );
  }
}
