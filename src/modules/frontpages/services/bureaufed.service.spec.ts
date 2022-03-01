import { TestBed } from '@angular/core/testing';
import { bureaufed } from '@modules/frontpages/models';

describe('bureaufedService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: bureaufed = TestBed.get(bureaufed);
        expect(service).toBeTruthy();
    });
});
