/**
 * Created by jean-paul.attard on 02/09/2016.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'my-uppercase'
})
export class MyUppercasePipe implements PipeTransform {

    transform(value: string): any {
        return value ? value.toUpperCase() : value;
    }
}