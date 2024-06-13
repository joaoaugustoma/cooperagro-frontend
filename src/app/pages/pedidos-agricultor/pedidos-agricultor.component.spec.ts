import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAgricultorComponent } from './pedidos-agricultor.component';

describe('PedidosComponent', () => {
  let component: PedidosAgricultorComponent;
  let fixture: ComponentFixture<PedidosAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosAgricultorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
