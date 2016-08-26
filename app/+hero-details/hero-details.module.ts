/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroDetailsComponent } from './hero-details.component';
import { heroDetailsRouting } from './hero-details.routing';

@NgModule({
    imports: [ CommonModule, FormsModule, heroDetailsRouting ],
    declarations: [ HeroDetailsComponent ]
})
export default class HeroDetailsModule {
}