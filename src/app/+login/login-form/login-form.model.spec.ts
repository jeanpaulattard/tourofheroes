/**
 * Created by Jean-paul.attard on 15/09/2016.
 */

import { LoginFormModel } from './login-form.model';

describe('Login Form Model', () => {
    let loginFormModel: LoginFormModel;

    beforeEach(()=> {
        loginFormModel = new LoginFormModel();
    });

    it('On creation, username should be undefined', () => {
        expect(loginFormModel.username).toBeUndefined();
    });

    it('On creation, password should be undefined', () => {
        expect(loginFormModel.password).toBeUndefined();
    });
});