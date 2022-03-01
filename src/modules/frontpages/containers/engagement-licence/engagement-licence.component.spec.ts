import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementLicenceComponent } from './engagement-licence.component';

describe('EngagementLicenceComponent', () => {
  let component: EngagementLicenceComponent;
  let fixture: ComponentFixture<EngagementLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
