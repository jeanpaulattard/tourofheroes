/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../objects/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'hero-details',
    templateUrl: 'app/herodetails/herodetail.component.html'
})

export class HeroDetailsComponent implements OnInit {
    constructor(private heroService: HeroService, private activeRoute: ActivatedRoute) {}

    hero: Hero;
    id: number;

    ngOnInit() {
        this.activeRoute.params.forEach((params: Params) => {
            let id = +params[ 'id' ];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack() {
        window.history.back();
    }
}