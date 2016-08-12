/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Injectable } from '@angular/core';

import { HEROES } from '../objects/mock-heroes';
import { Hero } from '../objects/hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return new Promise<Hero[]>(function (resolve) {
            return setTimeout(function () {
                return resolve(HEROES);
            }, 200);
        });
        // return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 200));
        // return Promise.resolve(HEROES);
    }
}