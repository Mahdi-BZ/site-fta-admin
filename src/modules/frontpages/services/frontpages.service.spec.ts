import { TestBed } from '@angular/core/testing';
import { FrontpagesService } from '@modules/frontpages/services/frontpages.service';

describe('ErrorService', () => {
    let frontpagesService: FrontpagesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FrontpagesService],
        });
        frontpagesService = TestBed.get(FrontpagesService);
    });

    describe('getError$', () => {
        it('should return Observable<Error>', () => {
            frontpagesService.getError$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
