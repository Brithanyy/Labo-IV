const students = [
    { name: "Juan", lastName: "Pérez", nota: 8 },
    { name: "Ana", lastName: "González", nota: 9 },
    { name: "Luis", lastName: "Martínez", nota: 4 },
    { name: "Sofía", lastName: "López", nota: 9 },
    { name: "Carlos", lastName: "Rodríguez", nota: 8.5 }
];

// ! Mapear todos los estudiantes con una propiedad extra course: "Laboratorio IV" el array original debe permanecer intacto

const studentsMap = students.map(estudiante => ({
    ...estudiante, //? Me traigo el primer estudiante.
    course: "Laboratorio IV" //? A cada uno de los estudiantes le agregamos esa nueva propiedad 
}))
console.log(studentsMap);

// ! Ordenar por nombre el array creado

studentsMap.sort((a,b) => a.name.localeCompare(b.name)); // ? Me los va a ordenar de menor a mayor, si queremos que sea al reves simplemente llamamos a b primero

console.log(studentsMap); // ? EL SORT ME VA A MUTAR EL ARRAY, ES DECIR, EL ORIGINAL ME LO VA A MODIFICAR

// ! Separar dos array con los estudiantes aprobados y desaprobados

const studentAprobat = studentsMap.filter(estudiante => estudiante.nota > 5); //? Crea un nuevo array con los estudiantes con nota superior a 5

console.log(studentAprobat);

const studentDezaprobat = studentsMap.filter(estudiante => estudiante.nota < 6);//? Crea un nuevo array con los estudiantes con menor que 6

console.log(studentDezaprobat);

//! Calcular el promedio utilizando reduce con solo 2 decimales
const promedio = studentsMap.reduce((acumulador, estudiante) => {
   return acumulador += estudiante.nota
},0) / studentsMap.length;

const promedioConDosDecimales = promedio.toFixed(2);
console.log(promedio);

