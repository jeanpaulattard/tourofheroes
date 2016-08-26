/**
 * Created by jean-paul.attard on 12/08/2016.
 */

import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './herodetails/herodetail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        loadChildren: 'app/+dashboard/dashboard.module'
    },
    {
        path: 'details/:id',
        component: HeroDetailsComponent
    },
    {
        path: 'registration',
        loadChildren: 'app/+registration/registration.module'
    }
];

export const routing = RouterModule.forRoot(appRoutes);