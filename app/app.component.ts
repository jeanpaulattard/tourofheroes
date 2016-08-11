/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    `
})

export class AppComponent {
    title = 'Tour of heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    public heroes = HEROES;
}

const HEROES: Hero[] = [
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

