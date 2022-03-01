import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleSanteComponent } from './athle-sante.component';

describe('AthleSanteComponent', () => {
  let component: AthleSanteComponent;
  let fixture: ComponentFixture<AthleSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
