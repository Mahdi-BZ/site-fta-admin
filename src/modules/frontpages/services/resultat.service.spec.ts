import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ResultatService } from '@modules/frontpages/services/resultat.service';

describe('ResultatsService', () => {
    let resultatsService: ResultatService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResultatService, DecimalPipe],
        });
        resultatsService = TestBed.get(ResultatService);
    });
});
