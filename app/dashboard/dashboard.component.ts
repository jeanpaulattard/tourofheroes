/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../services/hero.service';
import { Hero } from '../objects/hero';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService,
                private router: Router) { }

    heroes: Hero[];

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoHero(hero: Hero) {
        let link = [ '/details', hero.id ];
        this.router.navigate(link);
    }
}