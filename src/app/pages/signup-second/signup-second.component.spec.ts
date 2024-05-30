import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSecondComponent } from './signup-second.component';

describe('SignupInitialComponent', () => {
  let component: SignupSecondComponent;
  let fixture: ComponentFixture<SignupSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
