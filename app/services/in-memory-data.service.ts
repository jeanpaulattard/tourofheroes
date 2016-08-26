/**
 * Created by jean-paul.attard on 17/08/2016.
 */

import { Hero } from '../shared/hero';

export class InMemoryDataService {
    createDb() {
        let heroes: Hero[] = [
            { id: 11, name: 'Spider man' },
            { id: 12, name: 'Bat Man' },
            { id: 13, name: 'Super Man' },
            { id: 14, name: 'Ent Man' },
            { id: 15, name: 'Iron Man' },
            { id: 16, name: 'Captain America' },
            { id: 17, name: 'Black Widow' },
            { id: 18, name: 'The Hulk' },
            { id: 19, name: 'Hawk Eye' },
            { id: 20, name: 'Green Lantern' }
        ];

        return { heroes };
    }
}