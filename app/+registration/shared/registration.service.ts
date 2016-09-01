/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../../core/services/authentication.service';
import { RegisteringUser } from '../../shared/registering-user';
import { UsersService } from '../../core/services/users.service';
import { RegisteredUsers } from '../../shared/registered-users';

@Injectable()
export class RegistrationService {

    constructor(private usersService: UsersService, private authenticationService: AuthenticationService) {
    }

    /**
     * Normally the register method should accept a register.body object, but for this scenario this would be enough
     * @param user
     * @returns {Promise<boolean>}
     */
    register(user: RegisteringUser): Promise<boolean> {
        let users: RegisteredUsers = this.usersService.getUsers();
        let foundUsers: RegisteringUser[];

        if (users) {
            foundUsers = users.users.filter(registeredUser => {
                return registeredUser.username === user.username;
            });
        }

        if (!users || !foundUsers || foundUsers.length === 0) {
            this.usersService.addUserToUsers(user);
            this.authenticationService.setAuthenticationToken(user.username + user.password);
        }

        return new Promise<boolean>(resolve => setTimeout(() => resolve(!foundUsers || foundUsers.length === 0), 200));
    }
}