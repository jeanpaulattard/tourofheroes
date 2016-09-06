/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { Injectable } from '@angular/core';
import { RegisteredUsers } from '../../shared/registered-users';
import { RegisteringUser } from '../../shared/registering-user';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UsersService {

    private registeredUsersKey = 'registeredUsers';

    constructor(private localStorageService: LocalStorageService) {}

    addUserToUsers(user: RegisteringUser): RegisteredUsers {
        var users = this.getUsers();

        if (users) {
            users.users.push(user);
        } else {
            users = new RegisteredUsers;
            users.users.push(user);
        }

        this.localStorageService.putObject(this.registeredUsersKey, users);
        return users;
    }

    getUsers(): RegisteredUsers {
        return <RegisteredUsers>this.localStorageService.getObject(this.registeredUsersKey);
    }
}