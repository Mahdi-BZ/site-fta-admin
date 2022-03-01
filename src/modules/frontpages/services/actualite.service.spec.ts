import { TestBed } from '@angular/core/testing';

import { actualite } from '../models/actualite.model';

describe('actualiteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: actualite = TestBed.get(actualite);
        expect(service).toBeTruthy();
    });
});
