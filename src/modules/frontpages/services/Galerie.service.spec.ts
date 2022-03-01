import { TestBed } from '@angular/core/testing';
import { Galerie } from '@modules/frontpages/models';

describe('GalerieService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: Galerie = TestBed.get(Galerie);
        expect(service).toBeTruthy();
    });
});
