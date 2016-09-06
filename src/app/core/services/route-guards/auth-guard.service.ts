/**
 * Created by jean-paul.attard on 31/08/2016.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {

        if (this.authenticationService.isAuthenticated()) {
            return true;
        }

        // Set the route that the user is attempting to navigate to
        this.authenticationService.setReturnUrl(state.url);

        // If not authenticated, navigate to registration.
        let link = [ '/registration' ];
        this.router.navigate(link);

        return false;
    }
}