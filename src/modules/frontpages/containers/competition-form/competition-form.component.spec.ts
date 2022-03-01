import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionFormComponent } from './competition-form.component';

describe('CompetitionFormComponent', () => {
  let component: CompetitionFormComponent;
  let fixture: ComponentFixture<CompetitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
