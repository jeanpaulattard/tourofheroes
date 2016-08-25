/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RegistrationFormModel } from './registration-form.model';
import { RegisteredUser } from "../shared/registered-user";

@Component({
    moduleId: module.id,
    selector: 'registration-form',
    templateUrl: 'registration-form.component.html'
})
export class RegistrationFormComponent {

    heroes: string[] = [ 'Spidy Man', 'Suppa Man', 'Ban Man', 'Power Puff Girl', 'Circus Joker', 'Iron Lantern' ];

    model: RegistrationFormModel = new RegistrationFormModel();

    @Output() save = new EventEmitter();

    register(form: FormGroup) {
        this.save.emit(new RegisteredUser(this.model.name, this.model.surname, this.model.favouriteHero));
        form.reset();
    }
}