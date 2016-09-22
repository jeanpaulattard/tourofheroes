/**
 * Created by Jean-paul.attard on 22/09/2016.
 */
import { FormBuilder, FormGroup } from '@angular/forms';
import { AbstractModel } from '../models/abstract.model';

/**
 * Form Components using reactive forms should extend this "component" class to get access to the buildForm() method
 * call.
 */
export abstract class DynamicFormAbstractComponent {

    /**
     * The model provided can be considered as the contract with the html form, which defines the input elements the
     * form will contain, and the validators that each element should have, if any.
     *
     * @param formBuilder
     * @param model
     * @returns {FormGroup}
     */
    buildForm(formBuilder: FormBuilder, model: AbstractModel): FormGroup {
        let group = {};

        model.keys().forEach(key => {
            group[ key ] = [ model[ key ], model.getValidators(key) ]
        });

        return formBuilder.group(group);
    }
}