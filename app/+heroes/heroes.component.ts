/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../core/services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService,
                private router: Router) {}

    selectedHero: Hero;
    public heroes: Hero[];
    addingHero: boolean = false;
    error: any;

    expandHero(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoHero(hero: Hero) {
        let link = [ '/details', hero.id ];
        this.router.navigate(link);
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService.delete(hero).then(response => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
        }).catch(error => this.error = error);
    }

    // Call back for when the hero is persisted; notified from the hero details component
    close(callBackHero: Hero) {
        this.addingHero = false;
        if (callBackHero) {
            this.getHeroes();
        }
    }

    ngOnInit() {
        this.getHeroes();
    }
}