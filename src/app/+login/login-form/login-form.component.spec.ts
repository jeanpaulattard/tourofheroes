/**
 * Created by Jean-paul.attard on 14/09/2016.
 */
import { TestBed, ComponentFixture, inject, fakeAsync, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';
import { SharedModule } from '../../shared/shared.module';
import { configureTests } from '../../test.config';
import { LoginBody } from '../shared/login.body';
import { LoginFormComponent } from './login-form.component';

class MockLoginService {
    login(body: LoginBody) {
        if (body.username && body.password) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }
}

class MockRouter {
    navigate(link: any) {

    }
}

describe('Login Form Component', () => {

    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [ SharedModule ],
                declarations: [ LoginFormComponent ],
                providers: [
                    { provide: LoginService, useClass: MockLoginService },
                    { provide: Router, useClass: MockRouter }
                ]
            });
        };

        configureTests(configure).then(testBed => {
            fixture = testBed.createComponent(LoginFormComponent);
            fixture.detectChanges();

            done();
        });
    });

    it('Should Initialize', () => {
        expect(fixture.componentInstance instanceof LoginFormComponent).toBe(true);
    });

    describe('Blank LoginFormModel on initialization', () => {
        let fixtureInstance: LoginFormComponent;

        beforeEach(() => {
            fixtureInstance = fixture.componentInstance;
        });

        it('Should have a blank username', () => {
            expect(fixtureInstance.model.username).toBeUndefined();
        });

        it('Should have a blank password', () => {
            expect(fixtureInstance.model.password).toBeUndefined();
        });
    });

    describe('Logging in', () => {
        it('Should call router navigate on success', fakeAsync(
            inject([ Router ], (mockRouter: Router) => {

                spyOn(mockRouter, 'navigate');

                fixture.componentInstance.model.username = 'Username';
                fixture.componentInstance.model.password = 'Password';

                let form = new FormGroup({});
                fixture.componentInstance.doLogin(form);
                tick();

                expect(mockRouter.navigate).toHaveBeenCalledWith([ '/a/dashboard' ]);
            })
        ));

        it('Should emit an error and reset form on failure', fakeAsync(() => {
            spyOn(fixture.componentInstance.error, 'emit');

            let form = new FormGroup({});
            spyOn(form, 'reset');

            fixture.componentInstance.doLogin(form);
            tick();

            expect(form.reset).toHaveBeenCalled();
            expect(fixture.componentInstance.error.emit).toHaveBeenCalledWith('Invalid Login Credentials');
        }));
    });
});