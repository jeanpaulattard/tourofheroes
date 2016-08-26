/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

const heroeRoutes: Routes = [
    { path: '', component: HeroesComponent }
];

export const heroeRouting = RouterModule.forChild(heroeRoutes);