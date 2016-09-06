/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { Inject, Injectable, } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppConfig, DIConfig } from '../../app.config';

@Injectable()
export class TitleWrapperService {

    constructor(@Inject(AppConfig) private appConfig: DIConfig, private titleService: Title) {
    }

    setTitle(title: string) {
        this.titleService.setTitle(this.appConfig.appTitle.concat(title));
    }

    getTitle(): string {
        return this.titleService.getTitle();
    }
}