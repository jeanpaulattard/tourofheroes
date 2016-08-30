/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    template: ''
})
export class BaseComponent implements OnInit {
    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        if (this.authenticationService.isAuthenticated()) {
            let link = [ '/a' ];
            this.router.navigate(link);
        } else {
            let link = [ '/registration' ];
            this.router.navigate(link);
        }
    }
}