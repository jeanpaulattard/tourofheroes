/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './attribute-directives/highlight.directive';
import { UnlessDirective } from './structural-directives/unless.directive';


@NgModule({
    imports: [],
    declarations: [ HighlightDirective, UnlessDirective ],
    exports: [ HighlightDirective, UnlessDirective, FormsModule, CommonModule ]
})
export class SharedModule {
}