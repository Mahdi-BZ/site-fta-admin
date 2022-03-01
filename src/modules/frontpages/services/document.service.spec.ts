import { TestBed } from '@angular/core/testing';

import { document } from '../models/document.model';

describe('documentService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: document = TestBed.get(document);
        expect(service).toBeTruthy();
    });
});
