/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './herodetails/herodetail.component'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, HeroesComponent, HeroDetailsComponent, DashboardComponent ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
})

export class AppModule {
}