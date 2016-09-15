/**
 * Created by Jean-paul.attard on 15/09/2016.
 */
import { TestBed, inject, async } from '@angular/core/testing';
import { AuthenticationService } from '../../core/services/authentication.service';
import { UsersService } from '../../core/services/users.service';
import { LoginService } from './login.service';
import { configureTests } from '../../test.config';
import { RegisteredUsers } from '../../shared/registered-users';
import { LoginBody } from './login.body';
import { RegisteringUser } from '../../shared/registering-user';

class MockUsersService {
    getUsers() {
    }
}

class MockAuthenticationService {
    setAuthenticationToken() {
    }
}

describe('Login Service', () => {

    let userService: UsersService;
    let authenticationService: AuthenticationService;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                providers: [ LoginService,
                    { provide: UsersService, useClass: MockUsersService },
                    { provide: AuthenticationService, useClass: MockAuthenticationService }
                ]
            });
        };

        configureTests(configure).then(testBed => {
            userService = testBed.get(UsersService);
            authenticationService = testBed.get(AuthenticationService);

            done();
        });
    });

    it('login() return promise with false when no user object is found in cache',
        inject([ LoginService ], (loginService: LoginService) => {
            spyOn(userService, 'getUsers').and.returnValue(undefined);

            let promise = loginService.login(new LoginBody('username', 'password'));
            expect(promise instanceof Promise).toBe(true);

            promise.then(value => {
                expect(value).toBe(false);
            });
        })
    );

    it('login() return promise with false when there are no users in the users object',
        inject([ LoginService ], (loginService: LoginService) => {
            spyOn(userService, 'getUsers').and.returnValue(new RegisteredUsers());

            let promise = loginService.login(new LoginBody('username', 'password'));
            expect(promise instanceof Promise).toBe(true);

            promise.then(value => {
                expect(value).toBe(false);
            });
        })
    );

    describe('Users exist', () => {
        let users: RegisteredUsers;
        let user: RegisteringUser;

        beforeEach(() => {
            users = new RegisteredUsers();
            user = new RegisteringUser('John', 'Betty Man', 'Password123');
            users.users.push(user);

            spyOn(userService, 'getUsers').and.returnValue(users);
        });

        it('login() return promise with `false` when there are users but login credentials do not match', async(
            inject([ LoginService ], (loginService: LoginService) => {

                let promise = loginService.login(new LoginBody('Mark', 'Password123'));
                expect(promise instanceof Promise).toBe(true);

                promise.then(value => {
                    expect(value).toBe(false);
                });
            }))
        );

        it('login() returns promise with `true` value when credentials match', async(
            inject([ LoginService ], (loginService: LoginService) => {
                spyOn(authenticationService, 'setAuthenticationToken');

                let promise = loginService.login(new LoginBody('John', 'Password123'));
                expect(promise instanceof Promise).toBe(true);

                promise.then(value => {
                    expect(value).toBe(true);
                    expect(authenticationService.setAuthenticationToken)
                    .toHaveBeenCalledWith(user.username.concat(user.password))
                });
            }))
        );
    });
});