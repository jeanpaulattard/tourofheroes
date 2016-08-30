/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../core/services/hero.service';
import { TitleWrapperService } from '../core/services/title-wrapper.service';
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: 'hero-details.component.html',
    styleUrls: [ 'hero-details.component.css' ]
})
export class HeroDetailsComponent implements OnInit, OnDestroy {

    constructor(private heroService: HeroService, private activeRoute: ActivatedRoute,
                private titleWrapperService: TitleWrapperService) {
        this.titleWrapperService.setTitle('Heroe Details')
    }

    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    id: number;

    private subscription: Subscription;

    ngOnInit() {
        /**
         * Whenever a router navigates back and forth to the same component (example there's back and next button),
         * it will reuse the instance of the component, and do not create one. Thus, since ngOnInit would only be
         * called ones, subscribing to the params observable means that without re-createing the component, the we will
         * always have the latest hero ID that is provided.
         * @type {Subscription}
         */
        this.subscription = this.activeRoute.params.subscribe((params: Params) => {
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
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