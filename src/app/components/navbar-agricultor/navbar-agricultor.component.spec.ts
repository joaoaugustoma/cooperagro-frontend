import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAgricultorComponent } from './navbar-agricultor.component';

describe('NavbarAgricultorComponent', () => {
  let component: NavbarAgricultorComponent;
  let fixture: ComponentFixture<NavbarAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAgricultorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
