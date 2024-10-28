import { Component, inject } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Personaje } from '../../interface/personaje';
import { CharacterServiceService } from '../../service/character-service.service';

@Component({
  selector: 'app-character-form-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-form-component.component.html',
  styleUrl: './character-form-component.component.css'
})
export class CharacterFormComponentComponent {

  formulario : FormGroup;

  personaje : Personaje = {name: '', apodo: '', skill: '', description: ''};

  db = inject(CharacterServiceService);

  constructor(private fb : FormBuilder) {
    this.formulario = this.fb.group({
      'name' : ['', [Validators.required]],
      'apodo' : ['', [Validators.required]],
      'skill' : ['', [Validators.required]],
      'description' : ['',[Validators.required]]
    })
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
    if(this.formulario.invalid) return;

    ///Aqui tengo que agregar para que este personaje lo emita a la lista?

    this.addPersonajeDB()
    this.formulario.reset();
  }

  addPersonajeDB() {
  this.personaje = this.formulario.getRawValue();

  this.db.postPersonaje(this.personaje).subscribe({
    next : () => {
      alert("Personaje agregado con exito")
    },
    error : () => {
      console.log("Error al cargar el personaje en la BDD");
    }
  });

 }
}
