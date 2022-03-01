import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { listecompetitionComponent } from '@modules/frontpages/containers/competition/containers';

describe('listecompetitionComponent', () => {
    let component: listecompetitionComponent;
    let fixture: ComponentFixture<listecompetitionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [listecompetitionComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(listecompetitionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
