import { TestBed } from '@angular/core/testing';

import { centre } from '../models/centreformation.model';

describe('centreformationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: centre = TestBed.get(centre);
        expect(service).toBeTruthy();
    });
});
