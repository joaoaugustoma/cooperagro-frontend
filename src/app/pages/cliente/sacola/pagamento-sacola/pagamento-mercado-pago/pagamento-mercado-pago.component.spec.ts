import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoMercadoPagoComponent } from './pagamento-mercado-pago.component';

describe('PagamentoMercadoPagoComponent', () => {
  let component: PagamentoMercadoPagoComponent;
  let fixture: ComponentFixture<PagamentoMercadoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoMercadoPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentoMercadoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
