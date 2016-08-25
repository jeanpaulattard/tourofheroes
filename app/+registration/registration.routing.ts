/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration.component";

const registrationRoutes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
];

export const registrationRouting = RouterModule.forChild(registrationRoutes);