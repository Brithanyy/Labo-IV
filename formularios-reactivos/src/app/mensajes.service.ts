import { Injectable } from '@angular/core';
import { Mensaje } from './interface/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mensajes : Mensaje[] = [];
  
  add(mensaje : Mensaje) {
    this.mensajes.push(mensaje);
  }

}
