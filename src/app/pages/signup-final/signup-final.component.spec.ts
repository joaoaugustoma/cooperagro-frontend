import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFinalComponent } from './signup-final.component';

describe('SignupInitialComponent', () => {
  let component: SignupFinalComponent;
  let fixture: ComponentFixture<SignupFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupFinalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
