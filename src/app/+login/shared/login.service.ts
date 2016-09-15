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

        if (!users || users.users.length <= 0) {
            return new Promise<Boolean>(resolve => setTimeout(() => resolve(false), 200));
        }
        
        let retrievedUsers: RegisteringUser[] = users.users.filter(user => {
            if (user.username === body.username && user.password === body.password) {
                return true;
            }
            return false;
        });

        if (retrievedUsers && retrievedUsers.length > 0) {
            this.authenticationService.setAuthenticationToken(body.username.concat(body.password));
        }

        return new Promise<boolean>(resolve => setTimeout(() => resolve(retrievedUsers && retrievedUsers.length > 0),
            200));
    }
}