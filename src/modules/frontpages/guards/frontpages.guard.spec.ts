import { TestBed } from '@angular/core/testing';

import { FrontpagesGuard } from './frontpages.guard';

describe('Frontpages Guards', () => {
    let frontpagesGuard: FrontpagesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [FrontpagesGuard],
        });
        frontpagesGuard = TestBed.get(FrontpagesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            frontpagesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });
});
