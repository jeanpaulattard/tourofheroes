/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthenticationService {

    private authenticationTokenKey: string = 'Authorization';

    private redirectUrl: string;

    constructor(private localStorageService: LocalStorageService) {
    }

    getReturnUrl(): string {
        return this.redirectUrl;
    }

    getAuthenticationToken(): string {
        return this.localStorageService.get(this.authenticationTokenKey);
    }

    isAuthenticated() {
        return this.getAuthenticationToken() ? true : false;
    }

    setReturnUrl(value: string) {
        this.redirectUrl = value;
    }

    setAuthenticationToken(value: string) {
        this.localStorageService.put(this.authenticationTokenKey, value);
    }

    unAuthenticate() {
        this.localStorageService.remove(this.authenticationTokenKey);
    }
}