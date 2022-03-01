import { TestBed } from '@angular/core/testing';

import { club } from '../models/club.model';

describe('clubService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: club = TestBed.get(club);
        expect(service).toBeTruthy();
    });
});
