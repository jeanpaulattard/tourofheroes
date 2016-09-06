/**
 * Created by jean-paul.attard on 02/09/2016.
 */

import { MyUppercasePipe } from './my-uppercase.pipe';

describe('MyUppercasePipe', () => {
    let pipe: MyUppercasePipe;

    beforeEach(() => {
        pipe = new MyUppercasePipe();
    });

    it('transform "abc" to "ABC"', () => {
        expect(pipe.transform('abc')).toEqual('ABC');
    });

    it('transform "abc def" to "ABC DEF', () => {
        expect(pipe.transform('abc def')).toEqual('ABC DEF');
    });

    it('leave "ABC DEF" the same', () => {
        expect(pipe.transform('ABC DEF')).toEqual('ABC DEF');
    });
});