/**
 * Created by jean-paul.attard on 31/08/2016.
 */
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { LoginFormModel } from './login-form.model';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

    model: LoginFormModel = new LoginFormModel();

    login(form: FormGroup) {
        console.log('logging in...');
    }
}