/**
 * Created by Jean-paul.attard on 15/09/2016.
 */
import { LoginBody } from './login.body';

describe('Login Body', () => {
    it('Username should be equivalent to the value passed in constructor', () => {
        let loginBody = new LoginBody('username', 'password');
        expect(loginBody.username).toEqual('username');
    });

    it('Password should be equivalent to the value passed in constructor', () => {
        let loginBody = new LoginBody('username', 'password');
        expect(loginBody.password).toEqual('password');
    });
});