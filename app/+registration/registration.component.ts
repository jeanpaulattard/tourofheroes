/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisteredUser } from "./shared/registered-user";

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {
    users: RegisteredUser[] = [];

    constructor(private router: Router) {}

    addUser(user: RegisteredUser) {
        localStorage.setItem("User", JSON.stringify(user))
        localStorage.setItem("Authorisation", "token");
        this.users.push(user);

        let link = [ '/dashboard' ];

        this.router.navigate(link);
    }
}