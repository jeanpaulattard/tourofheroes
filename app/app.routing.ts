/**
 * Created by jean-paul.attard on 12/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseProtectedComponent } from './base-protected/base-protected.component';

import { AuthGuard } from './core/services/route-guards/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    {
        path: 'a',
        component: BaseProtectedComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'heroes', loadChildren: 'app/+heroes/heroes.module' },
            { path: 'dashboard', loadChildren: 'app/+dashboard/dashboard.module' }
        ],
        canActivate: [ AuthGuard ]
    },
    { path: 'registration', loadChildren: 'app/+registration/registration.module' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);