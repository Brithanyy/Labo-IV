import { Component, inject } from '@angular/core';  
import { MensajesService } from '../mensajes.service';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Mensaje } from '../interface/mensaje.interface';
import { DbMensajesService } from '../db-mensajes.service';

@Component({
  selector: 'app-add-mensaje',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-mensaje.component.html',
  styleUrl: './add-mensaje.component.css'
})
export class AddMensajeComponent {

  formulario_mensaje : FormGroup;
  mensaje_recibido: Mensaje = { mensaje: '' };

  db = inject(DbMensajesService);

  //! No se puede tener mas de un constructor. hay que conbinarlos
  constructor(private fb: FormBuilder, public mensajes_service: MensajesService) {
    this.formulario_mensaje = this.fb.group({
      'mensaje': ['', [Validators.required]]
    });
    //!TEST
    console.log(mensajes_service.mensajes);
  }
 
  addMensaje() {
    this.mensaje_recibido.mensaje = this.formulario_mensaje.get('mensaje')?.value
    console.log(this.mensaje_recibido.mensaje);

    this.db.postMensaje(this.mensaje_recibido).subscribe({ //!Agregando ese mensaje a la BDD
      next:() => {
        alert("Mensaje agregado a la DB");
        //this.mensajes_service.add(this.mensaje_recibido);
      },
      error: (err) => {
        console.log("No se pudo agregar el mensaje");
        console.log(err);
      }
    });

    this.formulario_mensaje.get('mensaje')?.reset();
  }

  get mensaje() {
    return this.formulario_mensaje.get('mensaje');
  }

  testMensaje() {
    console.log(this.formulario_mensaje.value);
  }
  
}
