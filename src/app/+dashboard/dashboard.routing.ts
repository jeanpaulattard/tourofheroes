/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);