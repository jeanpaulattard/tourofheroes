/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { RegisteringUser } from './registering-user';
import { RegisteredUsers } from './registered-users';

@Injectable()
export class RegistrationService {

    private registeredUsersKey = 'registeredUsers';

    constructor(private localStorageService: LocalStorageService, private authenticationService: AuthenticationService) {}

    register(user: RegisteringUser) {
        var users = this.getRegisteredUsers();

        if (users) {
            users.users.push(user);
        } else {
            users = new RegisteredUsers;
            users.users.push(user);
        }

        this.localStorageService.putObject(this.registeredUsersKey, users);
        this.authenticationService.setAuthenticationToken(user.name + user.surname + user.password);
    }

    private getRegisteredUsers(): RegisteredUsers {
        return <RegisteredUsers>this.localStorageService.getObject(this.registeredUsersKey);
    }
}