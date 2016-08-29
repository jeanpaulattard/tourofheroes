/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration.component";

const registrationRoutes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
];

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(registrationRoutes);