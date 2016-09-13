/**
 * Created by Jean-paul.attard on 13/09/2016.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { configureTests } from './test.config';

describe('App Component', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(done => {
        const configure = (testBed: TestBed) => {
            testBed.configureTestingModule({
                imports: [ AppModule ]
            });
        };

        configureTests(configure).then(testBed => {
            fixture = testBed.createComponent(AppComponent);
            fixture.detectChanges();

            done();
        });
    });

    it('Should initialize', function () {
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'Should have created AppComponent.');
    });

    it('Title should be correct', function () {
        expect(fixture.componentInstance.title).toBe('Tour of Heroes');
    });
});