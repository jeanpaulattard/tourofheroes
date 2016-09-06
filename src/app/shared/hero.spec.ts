/**
 * Created by jean-paul.attard on 02/09/2016.
 */
import { Hero } from './hero';

describe('Hero', () => {
    it('has name', () => {
        let hero: Hero = { id: 1, name: 'Peter' };
        expect(hero.name).toEqual('Peter');
    });

    it('has id', () => {
        let hero: Hero = { id: 1, name: 'Johnny' };
        expect(hero.id).toEqual(1);
    })
});