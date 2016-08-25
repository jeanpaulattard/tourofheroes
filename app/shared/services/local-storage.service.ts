/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
    put(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    get(key: string) {
        return localStorage.getItem(key);
    }

    putObject(key: string, value: Object) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getObject(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}