import { TestBed } from '@angular/core/testing';

import { athlete } from '../models/athlete.model';

describe('athleteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: athlete = TestBed.get(athlete);
        expect(service).toBeTruthy();
    });
});
