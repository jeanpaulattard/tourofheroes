/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { RegistrationModel } from './registration.model';
import { RegisteredUser } from './registered-user';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'registration-form',
    templateUrl: 'registration-form.component.html'
})
export class RegistrationFormComponent {

    powers: string[] = [ 'Moon Walk', 'Spidy Senses', 'Super Hearing', 'Long Jump', 'Deep Voice', 'Super Strength',
                         'X-ray Vision' ];

    model: RegistrationModel = new RegistrationModel();

    @Output() save = new EventEmitter();

    register(form: FormGroup) {
        this.save.emit(new RegisteredUser(this.model.name, this.model.surname, this.model.favouriteHero, this.model.favouritePower));
        form.reset();
    }
}