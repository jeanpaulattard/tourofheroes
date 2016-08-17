/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from '../objects/hero';
import { HeroDetailsComponent } from '../herodetails/herodetail.component';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css']
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