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
import { HeroService } from './shared/services/hero.service';
import { InMemoryDataService } from './services/in-memory-data.service';

import { routing } from './app.routing';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing, SharedModule.forRoot() ],
    declarations: [ AppComponent, HeroesComponent, HeroDetailsComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ]
})

export class AppModule {
}