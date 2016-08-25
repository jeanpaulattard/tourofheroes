/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { ModuleWithProviders, NgModule } from "@angular/core";

import { AuthenticationService } from './services/authentication.service';
import { LocalStorageService } from "./services/local-storage.service";
import { UsersService } from './services/users.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: []
})
export class SharedModule {
    /**
     * We want that providers are only included when imported by the RootModule. In the AppModule, we import the
     * SharedModule with SharedModule.forRoot(). We shall not add Services to the providers section of the @NgModule
     * decorator. By providing shared services to the root module, apart from being made available to the entire
     * application, we are keeping the service as a singleton.
     *
     * If services are provided part of the decorator, a new instance is created whenever a module is lazy loaded. This
     * is because the child injector of the lazy loaded module registers a new instance of the services.
     *
     * @returns {{ngModule: SharedModule, providers: (AuthenticationService|LocalStorageService)[]}}
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ AuthenticationService, LocalStorageService, UsersService ]
        }
    }
}