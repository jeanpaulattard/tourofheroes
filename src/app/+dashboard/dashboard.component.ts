/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../core/services/hero.service';
import { TitleWrapperService } from '../core/services/title-wrapper.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

    constructor(private heroService: HeroService,
                private router: Router,
                private titleWrapperService: TitleWrapperService) {
        this.titleWrapperService.setTitle('Dashboard');
    }

    heroes: Hero[];

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoHero(hero: Hero) {
        let link = [ '/a/heroes', hero.id ];
        this.router.navigate(link);
    }
}