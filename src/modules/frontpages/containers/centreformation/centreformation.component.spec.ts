import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CentreformationComponent } from '@modules/frontpages/containers';

describe('CentreformationComponent', () => {
    let component: CentreformationComponent;
    let fixture: ComponentFixture<CentreformationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CentreformationComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CentreformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
