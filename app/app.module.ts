/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api/index';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './herodetails/herodetail.component'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { InMemoryDataService } from './services/in-memory-data.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './herosearch/hero-search.component';

import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailsComponent,  HeroSearchComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ]
})

export class AppModule {
}