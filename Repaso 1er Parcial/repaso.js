const students = [
    {name: 'Juan', grade: 7},
    {name: 'Nano', grade: 8},
    {name: 'Brisa', grade: 9},
    {name: 'Rocio', grade: 5}
]

///Mapear este arreglo y a cada objeto asignarle un nuevo atributo.

const mapeoEstudiantes = students.map(estudiante => ({

    ...estudiante, // Aca me traigo un estudiante especifico (todo lo que contenga ese estudiante)
    course: 'Laboratorio IV' //Tiene el retorno implicito. A cada estudiante le va a asignar ese nuevo atributo

}));
console.log(mapeoEstudiantes);

///Ordenar por nombre el array creado, esto muta el array, Recuerde comparar dos string utilizando LocaleCompare

//El metodo sort se utiliza para ordenar y modifica el array original, por eso lo trabajamos con el mismo array.
// a y b hace referencia a las posiciones del array, ejemplo 0,1

students.slice().sort((a,b) => a.name.localeCompare(b.name)); ///Se hace en una sola linea y tiene el retorno implicito
//El slice sin parametros sirve para realizar una copia.
console.log(students);

///Separar dos arrays los estudiantes aprobados y desaprobados

///Para esto utilizamos el metodo filter que nos devuelve un nuevo arreglo, por ende tenemos que asignarlo a una nueva variable

const aprobados = students.filter(estudiante => estudiante.grade > 5); ///Nos va a devolver un nuevo arreglo con los estudiantes con grade mayor a 6

console.log("Arreglo de estudiantes aprobados")
console.log(aprobados)

const desaprobados = students.filter(estudiante => estudiante.grade < 6);

console.log("Arreglo de estudiantes desaprobados")
console.log(desaprobados);

///Calcular el promedio general utilizando reduce, con precision de 2 decimales
const promedio = students.reduce((acumulador, estudiante) => {
   return acumulador += estudiante.grade;
},0) / students.length;

console.log(promedio.toFixed(2));
///Al reduce siempre le tenemos que aclarar en donde inicia el acumulador.

///Sintaxis
// let resultado = array.reduce((acumulador, elementoActual) => {
//     // Lógica de acumulación
//     return nuevoAcumulador;
//   }, valorInicial);

import { Estudiante } from "./Estudiante.js";
import { StudentRepository } from "./studentRepository.js";
 

const est1 = new Estudiante(1,'Brisa','Ortiz',5)
const est2 = new Estudiante(2,'Rocio','Ortiz',4)
const est3 = new Estudiante(3,'Nano','Olmos',3)

const estudiantes = new StudentRepository();

estudiantes.addStudent(est1);
estudiantes.addStudent(est2);
estudiantes.addStudent(est3);

console.log(estudiantes.getStudent(1))

estudiantes.deleteStudent(1);

// let mapaEjemplo = new Map();
// mapaEjemplo.

for ( let i = 0 ; i < 10 ; i++ ) {
    console.log(estudiantes.getStudent(i)); ///MOSTRARLO HARCODEADO
}

