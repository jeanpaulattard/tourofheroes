/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component } from '@angular/core';

import { TitleWrapperService } from '../core/services/title-wrapper.service';

@Component({
    moduleId: module.id,
    templateUrl: 'registration.component.html'
})
export class RegistrationComponent {

    error: string;

    constructor(private titleWrapperService: TitleWrapperService) {
        this.titleWrapperService.setTitle('Registration');
    }

    onError(error: string) {
        this.error = error;
    }

    clearError() {
        this.error = null;
    }
}