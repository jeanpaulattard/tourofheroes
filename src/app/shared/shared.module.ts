/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './attribute-directives/highlight.directive';
import { UnlessDirective } from './structural-directives/unless.directive';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';

@NgModule({
    imports: [],
    declarations: [ HighlightDirective, UnlessDirective, MyUppercasePipe ],
    exports: [ CommonModule, FormsModule, HighlightDirective, ReactiveFormsModule, UnlessDirective, MyUppercasePipe ]
})
export class SharedModule {
}