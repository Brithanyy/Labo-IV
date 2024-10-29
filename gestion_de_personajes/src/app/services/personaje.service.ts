import { inject, Injectable } from '@angular/core';
import { Personaje } from '../interface/Personaje_interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor() { }

  url_db = 'http://localhost:3000/personajes';

  http = inject(HttpClient);

  agregarPersonaje(personaje : Personaje) : Observable<Personaje> {
    return this.http.post<Personaje>(this.url_db, personaje);
  }
  listaPersonajes() : Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url_db);
  }
  personajeEspecifico(id : number) : Observable<Personaje> {
    return this.http.get<Personaje>(`${this.url_db}/${id}`);
  }
  editarPersonaje(id: number, personaje : Personaje) : Observable<Personaje> {
    return this.http.put<Personaje>(`${this.url_db}/${id}`, personaje);
  }
  eliminarPersonaje(id : number) : Observable<Personaje> {
    return this.http.delete<Personaje>(`${this.url_db}/${id}`);
  }
}
