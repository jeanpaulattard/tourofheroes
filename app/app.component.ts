/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { Component } from '@angular/core';
import { HeroDetailsComponent } from './herodetails/herodetail.component';
import { Hero } from './objects/hero';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="expandHero(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <hero-details [hero]="selectedHero"></hero-details>
    `,
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
          }
    ` ]
})

export class AppComponent {

    selectedHero: Hero;

    expandHero(hero: Hero) {
        this.selectedHero = hero;
    }

    public heroes = HEROES;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Spider man' },
    { id: 12, name: 'Bat Man' },
    { id: 13, name: 'Super Man' },
    { id: 14, name: 'Ent Man' },
    { id: 15, name: 'Iron Man' },
    { id: 16, name: 'Captain America' },
    { id: 17, name: 'Black Widow' },
    { id: 18, name: 'The Hulk' },
    { id: 19, name: 'Hawk Eye' },
    { id: 20, name: 'Green Lantern' }
];

