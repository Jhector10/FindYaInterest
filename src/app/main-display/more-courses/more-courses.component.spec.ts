import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCoursesComponent } from './more-courses.component';

describe('MoreCoursesComponent', () => {
  let component: MoreCoursesComponent;
  let fixture: ComponentFixture<MoreCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
