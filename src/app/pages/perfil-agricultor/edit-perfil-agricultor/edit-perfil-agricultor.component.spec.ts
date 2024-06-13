import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPerfilAgricultorComponent } from './edit-perfil-agricultor.component';

describe('EditPerfilComponent', () => {
  let component: EditPerfilAgricultorComponent;
  let fixture: ComponentFixture<EditPerfilAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPerfilAgricultorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPerfilAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
