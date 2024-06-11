import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarAgricultorComponent } from './cancelar-agricultor.component';

describe('CancelarAgricultorComponent', () => {
  let component: CancelarAgricultorComponent;
  let fixture: ComponentFixture<CancelarAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelarAgricultorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelarAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
