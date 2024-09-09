function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
Producto.prototype.cantidad = 5;

Producto.prototype.calcular = function(){
    return this.precio * this.cantidad;
};

class Estudiante {
    constructor(legajo,nombre, nota){
        this.legajo = legajo;
        this.nombre = nombre;
        this.nota = nota;
    }
};

Estudiante.prototype.getNota = function () {
    return this.nota;
};
const estudiante = new Estudiante(1, "Brisa", 6);
console.log(estudiante.getNota());

/* JS - FUNCIONES - DECLARACIONES */
function sumar() {
    return 2 + 2;
};
console.log(sumar());

/* EXPRESION DE FUNCIONES */

/*Expresion anonima*/
const miFuncion = function(nombre) {
    return nombre;
};
const nombre = miFuncion("Brisa");

/* Funcion Nombrada*/
const saludar = function saludarFunction(nombre) {
    return `Hola, ${nombre}`;
};

/* Arrow Function */
const suma = (a,b) => a + b; /* Provoca el return sin necesidad de poner la palabra, ahorra lineas de codigo. */

const resta = (a, b) => {
    return a - b;
};

/* Arrow Function === expresion de funcion ? No es lo mismo.*/

/* Para acceder a los arguments con arrow function*/

const arrowfunction = (...arguments) => console.log(arguments); 
