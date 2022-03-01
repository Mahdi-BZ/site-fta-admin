import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RecordService } from '@modules/frontpages/services/record.service';

describe('RecordsService', () => {
    let recordsService: RecordService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RecordService, DecimalPipe],
        });
        recordsService = TestBed.get(RecordService);
    });
});
