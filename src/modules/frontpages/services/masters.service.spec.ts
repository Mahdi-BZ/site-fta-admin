import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { MastersService } from '@modules/frontpages/services/masters.service';

describe('MastersService', () => {
    let mastersService: MastersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MastersService, DecimalPipe],
        });
        mastersService = TestBed.get(MastersService);
    });
});
