import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interface/personaje';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  constructor() { }

  url_db = 'http://localhost:3000/personajes'
  http = inject(HttpClient);

  getPersonajes() : Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url_db);
  }

  getPersonajeByID(id : string | null) : Observable<Personaje> {
    return this.http.get<Personaje>(`${this.url_db}/${id}`);
  }

  postPersonaje(personaje : Personaje) : Observable<Personaje> {
    return this.http.post<Personaje>(this.url_db, personaje);
  }

  deletePersonaje(id : string | undefined) : Observable<Personaje> {
    return this.http.delete<Personaje>(`${this.url_db}/${id}`);
  }

  updatePersonaje(id : string | undefined, personaje : Personaje) : Observable<Personaje> {
    return this.http.put<Personaje>(`${this.url_db}/${id}`, personaje);
  }

}
