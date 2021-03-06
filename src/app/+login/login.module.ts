/**
 * Created by jean-paul.attard on 31/08/2016.
 */

import { NgModule } from '@angular/core';

import { loginRouting } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginService } from './shared/login.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ loginRouting, SharedModule ],
    declarations: [ LoginComponent, LoginFormComponent ],
    providers: [ LoginService ]
})
export class LoginModule {
}