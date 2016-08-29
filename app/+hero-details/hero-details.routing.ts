/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailsComponent } from './hero-details.component';

const heroDetailsRoutes: Routes = [
    { path: '', component: HeroDetailsComponent }
];

export const heroDetailsRouting: ModuleWithProviders = RouterModule.forChild(heroDetailsRoutes);