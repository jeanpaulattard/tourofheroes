/**
 * Created by jean-paul.attard on 12/08/2016.
 */

import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './herodetails/herodetail.component';
import { RegistrationFormComponent } from './registration/registration-form.component';

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
        component: DashboardComponent
    },
    {
        path: 'details/:id',
        component: HeroDetailsComponent
    },
    {
        path: 'registration',
        component: RegistrationFormComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);