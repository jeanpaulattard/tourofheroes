/**
 * Created by Jean-paul.attard on 14/09/2016.
 */
import { TestBed, ComponentFixture, inject, fakeAsync, tick, async } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';
import { SharedModule } from '../../shared/shared.module';
import { configureTests } from '../../test.config';
import { LoginBody } from '../shared/login.body';
import { LoginFormComponent } from './login-form.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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
    navigate() {
    }
}

@Component({
    template: `<login-form (error)="onError($event)"></login-form>`
})
class TestHostComponent {
    error: string;

    onError(value: string) {
        this.error = value;
    }
}

describe('Login Form Component', () => {

    let fixture: ComponentFixture<LoginFormComponent>;
    let host: ComponentFixture<TestHostComponent>;
    let router: Router;
    let loginService: LoginService;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [ SharedModule ],
                declarations: [ TestHostComponent, LoginFormComponent ],
                providers: [
                    { provide: LoginService, useClass: MockLoginService },
                    { provide: Router, useClass: MockRouter }
                ]
            });
        };

        configureTests(configure).then(testBed => {
            fixture = testBed.createComponent(LoginFormComponent);
            fixture.detectChanges();

            host = testBed.createComponent(TestHostComponent);
            host.detectChanges();

            router = fixture.debugElement.injector.get(Router);
            loginService = fixture.debugElement.injector.get(LoginService);

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
        it('Should call router navigate on success', fakeAsync(() => {
            spyOn(router, 'navigate');

            fixture.componentInstance.model.username = 'Username';
            fixture.componentInstance.model.password = 'Password';

            let form = new FormGroup({});
            fixture.componentInstance.doLogin(form);
            tick();

            expect(router.navigate).toHaveBeenCalledWith([ '/a/dashboard' ]);
        }));

        it('Should emit an error and reset form on failure', fakeAsync(() => {
            spyOn(fixture.componentInstance.error, 'emit');

            let form = new FormGroup({});
            spyOn(form, 'reset');

            fixture.componentInstance.doLogin(form);
            tick();

            expect(form.reset).toHaveBeenCalled();
            expect(fixture.componentInstance.error.emit).toHaveBeenCalledWith('Invalid Login Credentials');
        }));

        it('Parent component should be notified on error', async(() => {
            host.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
            host.whenStable().then(() => {
                expect(host.componentInstance.error).toEqual('Invalid Login Credentials');
            });
        }));
    });
});