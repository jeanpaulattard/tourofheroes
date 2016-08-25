/**
 * Created by jean-paul.attard on 25/08/2016.
 */

import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

    get(key: string): string {
        return localStorage.getItem(key);
    }

    getObject(key: string): Object {
        return JSON.parse(localStorage.getItem(key));
    }

    put(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    putObject(key: string, value: Object) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}