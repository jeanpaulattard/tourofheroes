/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';
import { RegistrationModel } from './registration.model';

@Component({
    selector: 'registration-form',
    templateUrl: 'app/registration/registration-form.component.html'
})
export class RegistrationFormComponent {

    model: RegistrationModel = new RegistrationModel();

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}