/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from '../objects/hero';
import { HeroDetailsComponent } from '../herodetails/herodetail.component';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'heroes',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="expandHero(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <hero-details [hero]="selectedHero"></hero-details>`,
    styles: [ `
          .selected {
            background-color: #CFD8DC !important;
            color: white;
          }
          .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
          }
          .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
          }
          .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
          }
          .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
          }
          .heroes .text {
            position: relative;
            top: -3px;
          }
          .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
          }` ],
    providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) {}

    selectedHero: Hero;
    public heroes: Hero[];

    expandHero(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }
}