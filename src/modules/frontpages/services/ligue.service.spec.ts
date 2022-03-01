import { TestBed } from '@angular/core/testing';
import { ligue } from '@modules/frontpages/models';

describe('ligueService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ligue = TestBed.get(ligue);
        expect(service).toBeTruthy();
    });
});
