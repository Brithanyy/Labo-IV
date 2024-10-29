import { Component, inject, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interface/Personaje_interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, TarjetaComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  gestion_personajes = inject(PersonajeService);
  router = inject(Router);

  personajes : Array<Personaje> = [];
  
  ngOnInit(): void {
    this.gestion_personajes.listaPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
      },
      error: (err) => {
        console.log("Error al mostrar la lista", err);
      }
    })
  };
  
  eliminarPersonaje(idEmitido : number) {
    this.gestion_personajes.eliminarPersonaje(idEmitido).subscribe({
      next: () => {
        this.personajes = this.personajes.filter(personajes => personajes.id != idEmitido)
      },
      error: (err) => {
        console.log("No se pudo eliminar el personaje", err);
      }
    });
  }
   
  
}
