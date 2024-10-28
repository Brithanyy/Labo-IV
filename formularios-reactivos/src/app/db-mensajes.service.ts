import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './interface/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbMensajesService {

  constructor() { }

  private http = inject(HttpClient);
  url_db : string =  'http://localhost:3000/mensajes';


  getMensaje() : Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.url_db)
  }

  getMensajeByID(id:string | null) : Observable<Mensaje> {
    return this.http.get<Mensaje>(`${this.url_db}/${id}`);
  }

  postMensaje(msj : Mensaje) : Observable<Mensaje> {
    
    return this.http.post<Mensaje>(this.url_db, msj);
  }

  deleteMensaje(id:string| undefined) : Observable<Mensaje> {
    return this.http.delete<Mensaje>(`${this.url_db}/${id}`);
  }

  updateMensaje(id:string| null, msj:Mensaje) : Observable<Mensaje> {
    return this.http.put<Mensaje>(`${this.url_db}/${id}`, msj);
  }

}
