/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const heroeRoutes: Routes = [
    { path: '', component: HeroesComponent },
    { path: ':id', component: HeroDetailsComponent }
];

export const heroeRouting: ModuleWithProviders = RouterModule.forChild(heroeRoutes);