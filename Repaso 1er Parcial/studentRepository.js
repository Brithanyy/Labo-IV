import { Estudiante } from "./Estudiante.js";

export class StudentRepository {
    #mapa
    constructor() {
        this.#mapa = new Map()
    }
   getStudent = function(id) {
    return this.#mapa.get(id);
   }
   addStudent = function(estudiante) {
    if(this.#mapa.has(estudiante.id)) throw new Error("El estudiante ya existe") ///Hash es para saber si existe
    else this.#mapa.set(estudiante.id, estudiante) ///Set es para agregarlo
   }
   deleteStudent = function(id) {
    if(!this.#mapa.has(id)) throw new Error("El estudiante no existe.")
    else this.#mapa.delete(id); //Delete es para eliminar, y elimina por la clave.
   }
}
