import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBoxInputComponent } from './combo-box-input.component';

describe('ComboBoxInputComponent', () => {
  let component: ComboBoxInputComponent;
  let fixture: ComponentFixture<ComboBoxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboBoxInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboBoxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
