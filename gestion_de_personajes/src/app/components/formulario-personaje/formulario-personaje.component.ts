import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Personaje } from '../../interface/Personaje_interface';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-formulario-personaje',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-personaje.component.html',
  styleUrl: './formulario-personaje.component.css'
})
export class FormularioPersonajeComponent {

  personaje : Personaje = {id: -1 ,name: '', apodo: '', skill: '', description: ''};

  gestion_personajes = inject(PersonajeService);

  formulario : FormGroup;

  constructor(private fb : FormBuilder) {
    this.formulario = this.fb.group({
      'id': ['',[Validators.required]],
      'name' : ['', [Validators.required]],
      'apodo' : ['', [Validators.required]],
      'skill' : ['', [Validators.required]],
      'description' : ['', [Validators.required]]
    });
   
  }

  get id() {
    return this.formulario.get('id');
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

  addPersonaje() {
    this.addDB();
    this.formulario.reset();
  }

  addDB() {
    this.personaje = this.formulario.getRawValue();
    this.gestion_personajes.agregarPersonaje(this.personaje).subscribe({
      next: (data) => {
        console.log("Personaje agregado con exito", data);
      },
      error: (err) => {
        console.log("Error al agregar el personaje ", err);
      }
    });
  }

}
