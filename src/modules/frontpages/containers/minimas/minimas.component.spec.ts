import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimasComponent } from './minimas.component';

describe('MinimasComponent', () => {
  let component: MinimasComponent;
  let fixture: ComponentFixture<MinimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
