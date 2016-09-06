/**
 * Created by jean-paul.attard on 31/08/2016.
 */

import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    error: string;

    onError(error: string) {
        this.error = error;
    }

    clearError() {
        this.error = null;
    }
}