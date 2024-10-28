import { Component } from '@angular/core';
import { MensajesService } from '../mensajes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-mensaje.component.html',
  styleUrl: './list-mensaje.component.css'
})
export class ListMensajeComponent {

  constructor(public mensajes_servicio : MensajesService) {

  }

}
