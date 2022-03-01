import { TestBed } from '@angular/core/testing';

import { commissionfed } from '../models/commissionfed.model';

describe('commissionfedService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: commissionfed = TestBed.get(commissionfed);
        expect(service).toBeTruthy();
    });
});
