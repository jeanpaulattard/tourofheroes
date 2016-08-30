/**
 * Created by jean-paul.attard on 12/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { BaseProtectedComponent } from './base-protected/base-protected.component';

const appRoutes: Routes = [
    { path: '', component: BaseComponent },
    {
        path: 'a',
        component: BaseProtectedComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'heroes', loadChildren: 'app/+heroes/heroes.module' },
            { path: 'dashboard', loadChildren: 'app/+dashboard/dashboard.module' },
            { path: 'details/:id', loadChildren: 'app/+hero-details/hero-details.module' },
        ]
    },
    { path: 'registration', loadChildren: 'app/+registration/registration.module' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);