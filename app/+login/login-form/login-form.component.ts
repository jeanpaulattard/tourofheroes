/**
 * Created by jean-paul.attard on 31/08/2016.
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginFormModel } from './login-form.model';
import { LoginService } from '../shared/login.service';
import { LoginBody } from '../shared/login.body';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

    constructor(private loginService: LoginService, private router: Router) {
    }

    model: LoginFormModel = new LoginFormModel();

    @Output() error = new EventEmitter();

    doLogin(form: FormGroup) {
        let body: LoginBody = new LoginBody(this.model.username, this.model.password);

        this.loginService.login(body).then(response => {
            if (response) {
                let link = [ '/a/dashboard' ];
                this.router.navigate(link);
            } else {
                form.reset();
                this.error.emit('Invalid Login Credentials');
            }
        });
    }
}