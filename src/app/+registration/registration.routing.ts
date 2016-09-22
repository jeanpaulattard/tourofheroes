/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration.component";
import { RegistrationFormResolve } from './shared/registration-form-resolve.service';

const registrationRoutes: Routes = [
    {
        path: '',
        component: RegistrationComponent,
        resolve: {
            validations: RegistrationFormResolve
        }
    }
];

export const registrationRouting: ModuleWithProviders = RouterModule.forChild(registrationRoutes);