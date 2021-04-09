import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotLoginPageComponent } from './forgot-login-page.component';

describe('ForgotLoginPageComponent', () => {
  let component: ForgotLoginPageComponent;
  let fixture: ComponentFixture<ForgotLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
