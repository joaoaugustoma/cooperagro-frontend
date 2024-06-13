import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPagamentoSacolaComponent } from './confirmar-pagamento-sacola.component';

describe('ConfirmarPagamentoSacolaComponent', () => {
  let component: ConfirmarPagamentoSacolaComponent;
  let fixture: ComponentFixture<ConfirmarPagamentoSacolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarPagamentoSacolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarPagamentoSacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
