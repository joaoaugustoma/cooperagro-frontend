import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornarAgricultorComponent } from './tornar-agricultor.component';

describe('TornarAgricultorComponent', () => {
  let component: TornarAgricultorComponent;
  let fixture: ComponentFixture<TornarAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TornarAgricultorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TornarAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
