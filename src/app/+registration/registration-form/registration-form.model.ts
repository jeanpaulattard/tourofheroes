/**
 * Created by jean-paul.attard on 19/08/2016.
 */
import { AbstractModel } from '../../shared/models/abstract.model';
import { ValidatorSet } from '../../shared/definitions/validator-set';

export class RegistrationFormModel extends AbstractModel {

    constructor(validators: ValidatorSet[], public username?: string, public favouriteHero?: string, public password?: string) {
        super(validators);
    }
}