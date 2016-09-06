/**
 * Created by jean-paul.attard on 31/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    { path: '', component: LoginComponent }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);