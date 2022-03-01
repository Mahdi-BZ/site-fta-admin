import { TestBed } from '@angular/core/testing';

import { formation } from '../models/formation.model';

describe('formationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: formation = TestBed.get(formation);
        expect(service).toBeTruthy();
    });
});
