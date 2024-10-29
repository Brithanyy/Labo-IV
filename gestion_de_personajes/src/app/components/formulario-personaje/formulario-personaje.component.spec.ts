import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPersonajeComponent } from './formulario-personaje.component';

describe('FormularioPersonajeComponent', () => {
  let component: FormularioPersonajeComponent;
  let fixture: ComponentFixture<FormularioPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
