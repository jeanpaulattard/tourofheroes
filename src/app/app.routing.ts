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
            {
                path: 'heroes',
                loadChildren: () => new Promise(resolve => (
                    require as any).ensure([], () => resolve(require('./+heroes/heroes.module').default))
                )
            },
            {
                path: 'dashboard',
                loadChildren: () => new Promise(resolve => (
                    require as any).ensure([], () => resolve(require('./+dashboard/dashboard.module').default))
                )
            }
        ],
        canActivate: [ AuthGuard ]
    },
    {
        path: 'registration',
        loadChildren: () => new Promise(resolve => (
            require as any).ensure([], () => resolve(require('./+registration/registration.module').default))
        )
    },
    {
        path: 'login',
        loadChildren: () => new Promise(resolve =>
            (require as any).ensure([], () => resolve(require('./+login/login.module').default))
        )
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);