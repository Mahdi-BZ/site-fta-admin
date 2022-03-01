import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletemodifComponent } from './athletemodif.component';

describe('AthletemodifComponent', () => {
  let component: AthletemodifComponent;
  let fixture: ComponentFixture<AthletemodifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletemodifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletemodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
