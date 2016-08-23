/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';
import { RegisteredUser } from './registered-user';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {

    users: RegisteredUser[] = [];

    addUser(user: RegisteredUser) {
        this.users.push(user);
    }
}