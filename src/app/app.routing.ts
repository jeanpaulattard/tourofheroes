/**
 * Created by jean-paul.attard on 12/08/2016.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseProtectedComponent } from './base-protected/base-protected.component';
import { AuthGuard } from './core/services/route-guards/auth-guard.service';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'a', pathMatch: 'full' },
    {
        path: 'a',
        component: BaseProtectedComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'heroes', loadChildren: './+heroes/heroes.module#HeroesModule' },
            { path: 'dashboard', loadChildren: './+dashboard/dashboard.module#DashboardModule' }
        ],
        canActivate: [ AuthGuard ]
    },
    { path: 'registration', loadChildren: './+registration/registration.module#RegistrationModule' },
    { path: 'login', loadChildren: './+login/login.module#LoginModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);