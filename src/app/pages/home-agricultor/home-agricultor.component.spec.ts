import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgricultorComponent } from './home-agricultor.component';

describe('HomeAgricultorComponent', () => {
  let component: HomeAgricultorComponent;
  let fixture: ComponentFixture<HomeAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAgricultorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
