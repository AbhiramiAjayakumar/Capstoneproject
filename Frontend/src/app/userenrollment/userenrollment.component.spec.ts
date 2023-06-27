import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserenrollmentComponent } from './userenrollment.component';

describe('UserenrollmentComponent', () => {
  let component: UserenrollmentComponent;
  let fixture: ComponentFixture<UserenrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserenrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
