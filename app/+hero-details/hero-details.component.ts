/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../core/services/hero.service';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-details.component.html',
    styleUrls: [ 'hero-details.component.css' ]
})

export class HeroDetailsComponent implements OnInit {
    constructor(private heroService: HeroService, private activeRoute: ActivatedRoute) {}

    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    id: number;

    ngOnInit() {
        this.activeRoute.params.forEach((params: Params) => {
            if (params[ 'id' ] !== undefined) {
                let id = +params[ 'id' ];
                this.heroService.getHero(id).then(hero => this.hero = hero);
                this.navigated = true;
            } else {
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    save() {
        this.heroService.save(this.hero).then(hero => {
            this.hero = hero;
            this.goBack(hero);
        }).catch(error => this.error = error);
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated === true) {
            window.history.back();
        }
    }
}