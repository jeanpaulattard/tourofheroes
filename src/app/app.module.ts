/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BaseProtectedComponent } from './base-protected/base-protected.component';

@NgModule({
    imports: [ CoreModule, FormsModule, HttpModule, routing, SharedModule ],
    declarations: [ AppComponent, BaseProtectedComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}