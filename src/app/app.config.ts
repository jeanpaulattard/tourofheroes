/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { OpaqueToken } from '@angular/core';

export interface DIConfig {
    apiEndpoint: string;
    appTitle: string;
}

export const HeroDIConfig: DIConfig = {
    apiEndpoint: 'test.endpoint.com',
    appTitle: 'Heroic | '
}

export let AppConfig = new OpaqueToken('app.config');