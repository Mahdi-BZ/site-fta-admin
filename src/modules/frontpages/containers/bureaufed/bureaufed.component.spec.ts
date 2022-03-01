import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BureaufedComponent } from '@modules/frontpages/containers';

describe('BureaufedComponent', () => {
    let component: BureaufedComponent;
    let fixture: ComponentFixture<BureaufedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BureaufedComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BureaufedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
