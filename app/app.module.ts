/**
 * Created by jean-paul.attard on 11/08/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService } from 'angular2-in-memory-web-api/index';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routing, SharedModule.forRoot() ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService }
    ]
})

export class AppModule {
}