import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarLojaComponent } from './visualizar-loja.component';

describe('VisualizarLojaComponent', () => {
  let component: VisualizarLojaComponent;
  let fixture: ComponentFixture<VisualizarLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarLojaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
