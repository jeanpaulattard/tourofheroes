/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { RegistrationModel } from './registration.model';
import { RegisteredUser } from './registered-user';

@Component({
    selector: 'registration-form',
    templateUrl: 'app/registration/registration-form.component.html'
})
export class RegistrationFormComponent {

    powers: string[] = [ 'Moon Walk', 'Spidy Senses', 'Super Hearing', 'Long Jump', 'Deep Voice', 'Super Strength',
                         'X-ray Vision' ];

    model: RegistrationModel = new RegistrationModel();

    @Output() save = new EventEmitter();

    register() {
        this.save.emit(new RegisteredUser(this.model.name, this.model.surname, this.model.favouriteHero, this.model.favouritePower));
    }
}