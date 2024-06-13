import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPedidoAgricultorComponent } from './detalhes-pedido-agricultor.component';

describe('DetalhesPedidoComponent', () => {
  let component: DetalhesPedidoAgricultorComponent;
  let fixture: ComponentFixture<DetalhesPedidoAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesPedidoAgricultorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPedidoAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
