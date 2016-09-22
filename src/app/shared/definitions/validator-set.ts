/**
 * Created by Jean-paul.attard on 22/09/2016.
 *
 * A group of validator functions pertaining to a particular field Eg: Validators.required, Validators.minLength(...),
 * identified by 'key'
 */
export class ValidatorSet {
    constructor(public key: string, public validators: any[]) {
    }
}