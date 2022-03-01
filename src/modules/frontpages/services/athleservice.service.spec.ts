import { TestBed } from '@angular/core/testing';

import { athlesante } from '../models/athlesante.model';

describe('athlesanteService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: athlesante = TestBed.get(athlesante);
        expect(service).toBeTruthy();
    });
});
