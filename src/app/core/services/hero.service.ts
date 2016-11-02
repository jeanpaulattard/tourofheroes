/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../../shared/hero';

@Injectable()
export class HeroService {
    private heroesUrl: string = 'app/heroes';

    private heroes: Hero[] = [
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

    constructor(private http: Http) {}

    getHeroes() {
        //return this.http.get(this.heroesUrl)
        //           .toPromise()
        //           .then(response => response.json().data as Hero[])
        //           .catch(this.handleError);

        //return new Promise<Hero[]>(function (resolve) {
        //    return setTimeout(function () {
        //        return resolve(this.heroes);
        //    }, 200);
        //});
        return new Promise<Hero[]>(resolve => setTimeout(() => resolve(this.heroes), 200)).then(response => response as Hero[]);
        // return Promise.resolve(HEROES);
    }

    getHero(id: number) {
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
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //
        //let url = `${this.heroesUrl}/${hero.id}`;
        //
        //return this.http.delete(url, { headers: headers }).toPromise()
        //           .catch(this.handleError);
        let heroes: Hero[] = this.heroes.filter(item => item.id === hero.id);
        if (heroes.length > 0) {
            let index = this.heroes.indexOf(heroes[ 0 ]);
            this.heroes.splice(index, 1);
        }

        return Promise.resolve(hero);
    }

    // Add a new hero
    private post(hero: Hero): Promise<Hero> {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //
        //return this.http.post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
        //           .toPromise().then(response => response.json().data)
        //           .catch(this.handleError);

        hero.id = this.heroes[ this.heroes.length - 1 ].id + 1;
        this.heroes.push(hero);

        return new Promise<Hero>(resolve => setTimeout(() => resolve(hero), 200));
    }

    // Update an existing hero
    private put(hero: Hero) {
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //
        //let url = `${this.heroesUrl}/${hero.id}`;
        //
        //return this.http.put(url, JSON.stringify(hero), { headers: headers })
        //           .toPromise().then(() => hero)
        //           .catch(this.handleError);

        let heroes: Hero[] = this.heroes.filter(item => item.id === hero.id);
        if (heroes.length > 0) {
            let index = this.heroes.indexOf(heroes[ 0 ]);
            this.heroes[ index ] = hero;
        }
        return new Promise<Hero>(resolve => setTimeout(() => resolve(hero), 200));
    }

    private handleError(error: any) {
        console.error('An error occured:', error);
        return Promise.reject(error.message || error);
    }
}