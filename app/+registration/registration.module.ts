/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { registrationRouting } from "./registration.routing";
import { RegistrationComponent } from "./registration.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { RegistrationService } from './shared/registration.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ registrationRouting, SharedModule ],
    declarations: [ RegistrationComponent, RegistrationFormComponent ],
    providers: [ RegistrationService ]
})
export default class RegistrationModule {
}