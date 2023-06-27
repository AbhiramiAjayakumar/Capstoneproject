import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcourseComponent } from './getcourse.component';

describe('GetcourseComponent', () => {
  let component: GetcourseComponent;
  let fixture: ComponentFixture<GetcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
