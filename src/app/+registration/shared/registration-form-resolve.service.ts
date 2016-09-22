/**
 * Created by Jean-paul.attard on 22/09/2016.
 */
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ValidatorSet } from '../../shared/definitions/validator-set';

@Injectable()
export class RegistrationFormResolve implements Resolve<ValidatorSet[]> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ValidatorSet[]>|boolean {
        return new Promise<ValidatorSet[]>(resolve => setTimeout(() => resolve([
            new ValidatorSet('username', [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ]),
            new ValidatorSet('password', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ]),
            new ValidatorSet('favouriteHero', [ Validators.required ])
        ]), 5000));
    }
}