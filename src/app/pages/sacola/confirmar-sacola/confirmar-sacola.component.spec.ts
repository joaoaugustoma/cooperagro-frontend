import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarSacolaComponent } from './confirmar-sacola.component';

describe('ConfirmarSacolaComponent', () => {
  let component: ConfirmarSacolaComponent;
  let fixture: ComponentFixture<ConfirmarSacolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarSacolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarSacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
