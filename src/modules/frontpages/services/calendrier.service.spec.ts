import { TestBed } from '@angular/core/testing';

import { calendrier } from '../models/calendrier.model';

describe('calendrierService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: calendrier = TestBed.get(calendrier);
        expect(service).toBeTruthy();
    });
});
