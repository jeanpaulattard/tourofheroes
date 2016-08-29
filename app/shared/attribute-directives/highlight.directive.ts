/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {

    @Input('myHighlight') highlightColor: string;

    @Input('defaultColor') set userDefaultColor(color: string) {
        this.defaultColor = color || this.defaultColor;
    }

    private defaultColor: string = '#AEC6CF';

    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.background = color;
    }
}