/**
 * Created by jean-paul.attard on 31/08/2016.
 */

import { Injectable } from '@angular/core';
import { LoginBody } from './login.body';

import { UsersService } from '../../core/services/users.service';
import { RegisteredUsers } from '../../shared/registered-users';
import { RegisteringUser } from '../../shared/registering-user';
import { AuthenticationService } from '../../core/services/authentication.service';

@Injectable()
export class LoginService {

    constructor(private usersService: UsersService, private authenticationService: AuthenticationService) {
    }

    login(body: LoginBody): Promise<boolean> {
        let users: RegisteredUsers = this.usersService.getUsers();
        let retrievedUsers: RegisteringUser[] = users.users.filter(user => {
            if (user.name === body.name && user.password === body.password) {
                return true;
            }
            return false;
        });

        if (retrievedUsers && retrievedUsers.length > 0) {
            this.authenticationService.setAuthenticationToken(body.name.concat(body.password));
        }

        return new Promise<boolean>(resolve => setTimeout(() => resolve(retrievedUsers && retrievedUsers.length > 0),
            200));
    }
}