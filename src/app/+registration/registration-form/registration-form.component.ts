/**
 * Created by jean-paul.attard on 19/08/2016.
 */

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisteringUser } from "../../shared/registering-user";
import { DynamicFormAbstractComponent } from '../../shared/components/dynamic-form.abstract.component';
import { RegistrationService } from '../shared/registration.service';
import { RegistrationFormModel } from './registration-form.model';
import { ValidatorSet } from '../../shared/definitions/validator-set';

@Component({
    selector: 'registration-form',
    templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent extends DynamicFormAbstractComponent implements OnInit {

    constructor(private registrationService: RegistrationService, private router: Router,
                private formBuilder: FormBuilder) {
        super();
    }

    @Output() error = new EventEmitter();
    heroes: string[] = [ 'Spidy Man', 'Suppa Man', 'Ban Man', 'Power Puff Girl', 'Circus Joker', 'Iron Lantern' ];
    validatorSets: ValidatorSet[] = [ // These must be returned by the router's resolver
        new ValidatorSet('username', [ Validators.required, Validators.minLength(5), Validators.maxLength(20) ]),
        new ValidatorSet('password', [ Validators.required, Validators.minLength(3), Validators.maxLength(30) ]),
        new ValidatorSet('favouriteHero', [ Validators.required ])
    ];

    model: RegistrationFormModel = new RegistrationFormModel(this.validatorSets); // To get upon resolve
    registrationForm: FormGroup;

    register(form: FormGroup) {
        let user: RegisteringUser = new RegisteringUser(this.registrationForm.get('username').value,
            this.registrationForm.get('favouriteHero').value,
            this.registrationForm.get('password').value);

        this.registrationService.register(user).then(response => {
            if (response) {
                let link = [ '/a/dashboard' ];
                this.router.navigate(link);
            } else {
                this.error.emit('Unable to register user. A user with that username already exists.');
                form.reset();
            }
        });

    }

    ngOnInit(): void {
        this.registrationForm = super.buildForm(this.formBuilder, this.model);

        this.registrationForm.valueChanges.subscribe(data => {
            let fields: Array<string> = Object.keys(data);

            fields.forEach(field => {
                let control: AbstractControl = this.registrationForm.get(field);
                if (control && control.dirty && control.invalid) {
                    // Build Message Here
                }
            });
        });
    }
}