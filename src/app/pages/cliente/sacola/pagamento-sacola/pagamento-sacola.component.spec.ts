import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoSacolaComponent } from './pagamento-sacola.component';

describe('PagamentoSacolaComponent', () => {
  let component: PagamentoSacolaComponent;
  let fixture: ComponentFixture<PagamentoSacolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoSacolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagamentoSacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
