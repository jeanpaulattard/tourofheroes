/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { registrationRouting } from "./registration.routing";
import { RegistrationComponent } from "./registration.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";

@NgModule({
    imports: [ CommonModule, FormsModule, registrationRouting ],
    declarations: [ RegistrationComponent, RegistrationFormComponent ]
})
export default class RegistrationModule {
}