/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
`
})

export class AppComponent {
    title = "Tour of Heroes";
}



