/**
 * Created by Jean-paul.attard on 22/09/2016.
 */
import { ValidatorSet } from '../definitions/validator-set';

export abstract class AbstractModel {
    constructor(private validators: ValidatorSet[]) {
    }

    keys(): string[] {
        return Object.keys(this).filter(key => key !== 'validators'); // Exclude validators items;
    }

    getValidators(key: string): any[] {
        let groups: ValidatorSet[] = this.validators.filter(group => key === group.key);

        if (groups.length != 1) {
            throw `Expected to have retrieved 1 validation group but got ${groups.length} for key [${key}]`;
        }

        return groups[ 0 ].validators;
    }
}