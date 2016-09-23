/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';

import { registrationRouting } from "./registration.routing";
import { RegistrationComponent } from "./registration.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { RegistrationService } from './shared/registration.service';
import { RegistrationFormResolve } from './shared/registration-form-resolve.service';

@NgModule({
    imports: [ registrationRouting, SharedModule ],
    declarations: [ RegistrationComponent, RegistrationFormComponent ],
    providers: [ RegistrationFormResolve, RegistrationService ]
})
export class RegistrationModule {
}