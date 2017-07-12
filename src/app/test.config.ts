/**
 * Created by Jean-paul.attard on 13/09/2016.
 */
import { TestBed, getTestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

/**
 * This function takes another function 'configure' as a parameter. The 'configure' function must be able to take a
 * TestBed object as a parameter, which it will configure according to the Component Being tested.
 *
 * This function retrieves the angular TestBed; and first attempts to initialize it. Note that a testBed must only be
 * initialized once, hence why the function is first checking if the platform has already been set or not.
 *
 * Following initialization, the testbed is first configured to auto detect component fixtures, by setting the provider
 * ComponentFixtureAutoDetect to true (refer to the testing docs, in the change detection section
 * https://angular.io/docs/ts/latest/guide/testing.html#!#_detectchanges_-angular-change-detection-within-a-test);
 * then passed to the configure function that is provided as a parameter, to apply test specific configuration.
 *
 * Lastly, the components are compiled, and the testBed is returned within a promise, to be used within the test (for
 * example for creating component fixtures etc. *
 *
 * @param configure
 * @returns {Promise<TestBed>}
 */
export const configureTests = (configure: (testBed: TestBed) => void) => {
    const testBed = getTestBed();

    if (testBed.platform == null) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }

    testBed.configureCompiler({
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
    });

    configure(testBed);

    return testBed.compileComponents().then(() => testBed);
};