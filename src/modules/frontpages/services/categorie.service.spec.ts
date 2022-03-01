import { TestBed } from '@angular/core/testing';

import { categorie } from '../models/categorie.model';

describe('CategorieService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: categorie = TestBed.get(categorie);
        expect(service).toBeTruthy();
    });
});
