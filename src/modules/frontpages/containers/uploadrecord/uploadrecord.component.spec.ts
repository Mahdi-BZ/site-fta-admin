import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadrecordComponent } from './uploadrecord.component';

describe('UploadrecordComponent', () => {
  let component: UploadrecordComponent;
  let fixture: ComponentFixture<UploadrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
