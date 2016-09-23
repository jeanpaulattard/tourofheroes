/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { heroeRouting } from './heroes.routing';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
    imports: [ CommonModule, FormsModule, heroeRouting ],
    declarations: [ HeroesComponent, HeroDetailsComponent ]
})
export class HeroesModule {
}