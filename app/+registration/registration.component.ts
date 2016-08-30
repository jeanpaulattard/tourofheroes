/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RegisteringUser } from "../shared/registering-user";
import { RegistrationService } from './shared/registration.service';
import { TitleWrapperService } from '../core/services/title-wrapper.service';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {

    constructor(private router: Router, private registrationService: RegistrationService,
                private titleWrapperService: TitleWrapperService) {
        this.titleWrapperService.setTitle('Registration')
    }

    addUser(user: RegisteringUser) {
        this.registrationService.register(user);

        let link = [ '/a/dashboard' ];
        this.router.navigate(link);
    }
}