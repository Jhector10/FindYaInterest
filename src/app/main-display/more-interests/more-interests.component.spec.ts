import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInterestsComponent } from './more-interests.component';

describe('MoreInterestsComponent', () => {
  let component: MoreInterestsComponent;
  let fixture: ComponentFixture<MoreInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
