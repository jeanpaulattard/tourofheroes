/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { Component, Input } from '@angular/core';
import { Hero } from '../objects/hero';

@Component({
    selector: 'hero-details',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>`
})

export class HeroDetailsComponent {
    @Input()
    hero: Hero;
}