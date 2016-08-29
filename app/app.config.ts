/**
 * Created by jean-paul.attard on 29/08/2016.
 */

import { OpaqueToken } from '@angular/core';

export interface DIConfigInterface {
    apiEndpoint: string;
    appTitle: string;
}

export const HeroDIConfig: DIConfigInterface = {
    apiEndpoint: 'test.endpoint.com',
    appTitle: 'Heroic | '
}

export let AppConfig = new OpaqueToken('app.config');