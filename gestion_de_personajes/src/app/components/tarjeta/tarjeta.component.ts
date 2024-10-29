import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interface/Personaje_interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  //! HIJO DE LA LISTA
  @Input() personaje? : Personaje;
  @Output() eliminar : EventEmitter<number> = new EventEmitter();

  router = inject(Router);

  eliminarPersonaje() : void {
    this.eliminar.emit(this.personaje?.id);
  }

  verDetalle() {
    this.router.navigate(['detalle', this.personaje?.id]);
  }

}