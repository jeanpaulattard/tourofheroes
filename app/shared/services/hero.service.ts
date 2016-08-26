/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../objects/hero';

@Injectable()
export class HeroService {
    private heroesUrl: string = 'app/heroes';

    constructor(private http: Http) {}

    getHeroes() {
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
        // return new Promise<Hero[]>(function (resolve) {
        //     return setTimeout(function () {
        //         return resolve(HEROES);
        //     }, 200);
        // });
        // return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 200));
        // return Promise.resolve(HEROES);
    }

    getHero(id) {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    // Save the hero
    save(hero: Hero) {
        if (hero.id) {
            return this.put(hero);
        }

        return this.post(hero);
    }

    // Deletes an existing hero
    delete(hero: Hero) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http.delete(url, { headers: headers }).toPromise()
                   .catch(this.handleError);
    }

    // Add a new hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
                   .toPromise().then(response => response.json().data)
                   .catch(this.handleError);
    }

    // Update an existing hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http.put(url, JSON.stringify(hero), { headers: headers })
                   .toPromise().then(() => hero)
                   .catch(this.handleError);
    }


    private handleError(error: any) {
        console.error('An error occured:', error);
        return Promise.reject(error.message || error);
    }
}