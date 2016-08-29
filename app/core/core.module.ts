/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SEED_DATA } from 'angular2-in-memory-web-api';

import { AppConfig, HeroDIConfig } from '../app.config';

import { AuthenticationService } from './services/authentication.service';
import { HeroService } from './services/hero.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LocalStorageService } from './services/local-storage.service';
import { UsersService } from './services/users.service';

/**
 * The Core Module should contain all the singleton providers that are to be imported by the AppModule,
 * as well as other components, directives, pipes etc used by the AppComponent only.
 *
 * Taken from the angular docs (https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module):
 *
 * The constructor tells Angular to inject the CoreModule into itself. That seems dangerously circular.
 * The injection would be circular if Angular looked for CoreModule in the current injector. The @SkipSelf decorator
 * means "look for CoreModule in an ancestor injector, above me in the injector hierarchy."
 *
 * If the constructor executes as intended in the AppModule, there is no ancestor injector that could provide an
 * instance of CoreModule. The injector should give up. By default the injector throws an error when it can't find a
 * requested provider. The @Optional decorator means not finding the service is OK. The injector returns null, the
 * parentModule parameter is null, and the constructor concludes uneventfully.
 *
 * It's a different story if we improperly import CoreModule into a lazy loaded module such as HeroModule (try it).
 * Angular creates a lazy loaded module with its own injector, a child of the root injector. @SkipSelf causes Angular
 * to look for a CoreModule in the parent injector which this time is the root injector. Of course it finds the
 * instance imported by the root AppModule. Now parentModule exists and the constructor throws the error.
 */
@NgModule({
    imports: [],
    providers: [ AuthenticationService, HeroService, LocalStorageService, UsersService, Title,
        { provide: AppConfig, useValue: HeroDIConfig },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() private parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in AppModule only!')
        }
    }
}