/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationFormModel } from './registration-form.model';
import { RegisteringUser } from "../../shared/registering-user";
import { RegistrationService } from '../shared/registration.service';

@Component({
    moduleId: module.id,
    selector: 'registration-form',
    templateUrl: 'registration-form.component.html'
})
export class RegistrationFormComponent {

    constructor(private registrationService: RegistrationService, private router: Router) {
    }

    heroes: string[] = [ 'Spidy Man', 'Suppa Man', 'Ban Man', 'Power Puff Girl', 'Circus Joker', 'Iron Lantern' ];

    model: RegistrationFormModel = new RegistrationFormModel();

    @Output() error = new EventEmitter();

    register(form: FormGroup) {
        let user: RegisteringUser = new RegisteringUser(this.model.username, this.model.favouriteHero, this.model.password);
        this.registrationService.register(user).then(response => {
            if (response) {
                let link = [ '/a/dashboard' ];
                this.router.navigate(link);
            } else {
                this.error.emit('Unable to register user. A user with that username already exists.');
                form.reset();
            }
        });

    }
}