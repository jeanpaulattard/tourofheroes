/**
 * Created by jean-paul.attard on 25/08/2016.
 */
import { ModuleWithProviders, NgModule } from "@angular/core";
import { LocalStorageService } from "./services/local-storage.service";

@NgModule({})
export class SharedModule {
    /**
     * We want that providers are only included when imported by the RootModule. In the AppModule, we import the
     * SharedModule with SharedModule.forRoot(). We shall not
     * @returns {{ngModule: SharedModule, providers: LocalStorageService[]}}
     */
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ LocalStorageService ]
        }
    }
}