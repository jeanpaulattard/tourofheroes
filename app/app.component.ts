/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { Component} from '@angular/core';

import {HeroesComponent} from './heroes/heroes.component';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><heroes></heroes>'
})

export class AppComponent  {
    title = "Tour of Heroes";
}



