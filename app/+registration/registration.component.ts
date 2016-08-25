/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisteringUser } from "./shared/registering-user";
import { RegistrationService } from './shared/registration.service';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
    users: RegisteringUser[] = [];

    constructor(private router: Router, private registrationService: RegistrationService) {}

    addUser(user: RegisteringUser) {
        this.registrationService.register(user);

        let link = [ '/dashboard' ];
        this.router.navigate(link);
    }
}