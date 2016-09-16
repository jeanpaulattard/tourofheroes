/**
 * Created by Jean-paul.attard on 14/09/2016.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { configureTests } from '../test.config';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './shared/login.service';
import { SharedModule } from '../shared/shared.module';

class MockLoginService {
}

class MockRouter {
}

describe('Login Component', () => {

    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [ SharedModule ],
                declarations: [ LoginComponent, LoginFormComponent ],
                providers: [
                    { provide: LoginService, useClass: MockLoginService },
                    { provide: Router, useClass: MockRouter }
                ]
            });
        };

        configureTests(configure).then(testBed => {
            fixture = testBed.createComponent(LoginComponent);
            fixture.detectChanges();

            done();
        });
    });

    it('Should initialize', () => {
        expect(fixture.componentInstance instanceof LoginComponent).toBe(true, 'Should have created LoginComponent.')
    });

    it('onError should set error', () => {
        let error: string = 'This is an error';
        fixture.componentInstance.onError(error);
        fixture.detectChanges();

        expect(fixture.componentInstance.error).toEqual(error);
        expect(fixture.debugElement.query(By.css('div.alert>p')).nativeElement.textContent).toContain(error);
    });

    it('clearError() should clear error', () => {
        let error: string = 'This is an error';
        fixture.componentInstance.error = error;
        fixture.componentInstance.clearError();

        expect(fixture.componentInstance.error).toBeNull();
    });

    it('should clear error when error is closed', () => {
        let error: string = 'This is an error';
        fixture.componentInstance.error = error;
        fixture.detectChanges();

        fixture.debugElement.query(By.css('button.close')).triggerEventHandler('click', null);
        expect(fixture.componentInstance.error).toBeNull();
    });
});