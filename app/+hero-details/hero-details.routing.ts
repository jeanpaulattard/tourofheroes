/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details.component';

const heroDetailsRoutes: Routes = [
    { path: '', component: HeroDetailsComponent }
];

export const heroDetailsRouting = RouterModule.forChild(heroDetailsRoutes);