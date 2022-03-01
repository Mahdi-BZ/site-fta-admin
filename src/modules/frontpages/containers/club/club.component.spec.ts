import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubComponent } from '@modules/frontpages/containers';

describe('ClubComponent', () => {
    let component: ClubComponent;
    let fixture: ComponentFixture<ClubComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClubComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
