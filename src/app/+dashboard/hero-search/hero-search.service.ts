/**
 * Created by jean-paul.attard on 17/08/2016.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero } from '../../shared/hero';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Hero[]> {
        return this.http.get(`app/heroes/?name=${term}`).map((r: Response) => r.json().data as Hero[]);
    }
}