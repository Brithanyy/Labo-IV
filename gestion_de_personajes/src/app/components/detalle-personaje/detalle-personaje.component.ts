import { Component, inject, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../interface/Personaje_interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [],
  templateUrl: './detalle-personaje.component.html',
  styleUrl: './detalle-personaje.component.css'
})
export class DetallePersonajeComponent implements OnInit{
  gestion_personajes = inject(PersonajeService);

  personaje? : Personaje;

  router = inject(ActivatedRoute);
  ruta = inject(Router);

  ngOnInit(): void {
    const id_personaje = this.router.snapshot.paramMap.get('id'); //!Obteniendo el ID de la ruta
    const id_number = Number(id_personaje);
    this.gestion_personajes.personajeEspecifico(id_number).subscribe({
      next: (data) => {
        this.personaje = data;
      },
      error: (err) => {
        console.log("Error con el ID", err);
      }
    })

  }

  editar() {
    this.ruta.navigate(['editar',this.personaje?.id]);
  }

}