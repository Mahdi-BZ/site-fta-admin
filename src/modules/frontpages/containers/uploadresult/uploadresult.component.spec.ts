import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadresultComponent } from './uploadresult.component';

describe('UploadresultComponent', () => {
  let component: UploadresultComponent;
  let fixture: ComponentFixture<UploadresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
