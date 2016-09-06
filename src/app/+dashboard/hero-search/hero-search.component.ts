/**
 * Created by jean-paul.attard on 17/08/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { Hero } from '../../shared/hero';
import { HeroSearchService } from './hero-search.service';

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.css' ],
    providers: [ HeroSearchService ] // Specific to this component
})

export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    searchHistory: string[] = [];
    private searchTerms = new Subject<string>();

    constructor(private router: Router,
                private heroSearchService: HeroSearchService) {}

    // Push a search term into the observable stream.
    search(term: string) {
        this.searchTerms.next(term);
    }

    alertApp(value: string) {
        this.searchHistory.push(value);
    }

    gotoDetails(hero: Hero) {
        let link = [ '/a/heroes', hero.id ];

        this.router.navigate(link);
    }

    ngOnInit() {
        this.heroes = this.searchTerms
                          .debounceTime(300) // Wait for 300 ms
                          .distinctUntilChanged() // ignore if searchTerm is the same as previous one
                          // Create a new observable each time
                          .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
                          .catch(error => {
                              console.error(error);
                              return Observable.of<Hero[]>([]);
                          });
    }
}