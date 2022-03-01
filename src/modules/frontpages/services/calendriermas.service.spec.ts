import { TestBed } from '@angular/core/testing';

import { calendriermasters } from '../models/calendriermasters.model';

describe('CalendriermasService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: calendriermasters = TestBed.get(calendriermasters);
        expect(service).toBeTruthy();
    });
});
