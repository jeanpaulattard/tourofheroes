/**
 * Created by jean-paul.attard on 26/08/2016.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { dashboardRouting } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, dashboardRouting, FormsModule, SharedModule],
    declarations: [ DashboardComponent, HeroSearchComponent ],
    providers: []
})
export default class DashboardModule {
}