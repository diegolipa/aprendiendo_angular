import { Component, OnInit } from '@angular/core';
import {Heroe} from "./heroe";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  title = 'Tour of Heroes';
  heroes = [
    new Heroe(1, 'Windstorm'),
    new Heroe(13, 'Bombasto'),
    new Heroe(15, 'Magneta'),
    new Heroe(20, 'Tornado')
  ];
  myHero = this.heroes[3];
}
