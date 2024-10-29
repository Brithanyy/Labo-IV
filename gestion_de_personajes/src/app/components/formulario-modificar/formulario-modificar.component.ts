import { Component, inject } from '@angular/core';
import { Personaje } from '../../interface/Personaje_interface';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeService } from '../../services/personaje.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-formulario-modificar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-modificar.component.html',
  styleUrl: './formulario-modificar.component.css'
})
export class FormularioModificarComponent {
  personaje : Personaje = {id: -1 ,name: '', apodo: '', skill: '', description: ''};

  gestion_personajes = inject(PersonajeService);

  ruta = inject(ActivatedRoute);

  formulario : FormGroup;

  constructor(private fb : FormBuilder) {
    this.formulario = this.fb.group({
      'name' : ['', [Validators.required]],
      'apodo' : ['', [Validators.required]],
      'skill' : ['', [Validators.required]],
      'description' : ['', [Validators.required]]
    });
   
  }

  get name() {
    return this.formulario.get('name');
  }
  get apodo() {
    return this.formulario.get('apodo');
  }
  get skill() {
    return this.formulario.get('skill');
  }
  get description() {
    return this.formulario.get('description');
  }

  modificar() {
    this.modificarDB();
    this.formulario.reset();
  }

  modificarDB() {
    this.personaje = this.formulario.getRawValue();
    const id_string = this.ruta.snapshot.paramMap.get('id');
    const id_number = Number(id_string);
    this.personaje.id = id_number;
    this.gestion_personajes.editarPersonaje(this.personaje.id,this.personaje).subscribe({
      next: (data) => {
        console.log("Personaje modificado con exito", data);
      },
      error: (err) => {
        console.log("Error al modificar el personaje ", err);
      }
    });
  }
}
