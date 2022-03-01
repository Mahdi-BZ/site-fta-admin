import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommissionfedComponent } from '@modules/frontpages/containers';

describe('commissionfedComponent', () => {
    let component: CommissionfedComponent;
    let fixture: ComponentFixture<CommissionfedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommissionfedComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommissionfedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
