/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../../core/services/authentication.service';
import { RegisteringUser } from '../../shared/registering-user';
import { UsersService } from '../../core/services/users.service';

@Injectable()
export class RegistrationService {

    constructor(private usersService: UsersService, private authenticationService: AuthenticationService) {}

    register(user: RegisteringUser) {
        this.usersService.addUserToUsers(user);
        this.authenticationService.setAuthenticationToken(user.name + user.surname + user.password);
    }
}