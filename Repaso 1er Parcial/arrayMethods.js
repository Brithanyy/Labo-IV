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





const estudiantes = [
    { name: 'Juan', id: 1, grade: 7 },
    { name: 'Pedro', id: 2, grade: 4 },
    { name: 'Carlos', id: 3, grade: 8 },
    { name: 'Ana', id: 4, grade: 9 },
    { name: 'Maria', id: 5,grade: 6 }
];

//! Mapear todos los estudiantes con una propiedad extra, course: "Labotarorio IV". El array original debe permanecer intacto

const estudiantesMapeados = estudiantes.map(estudiantes => ({
   ...estudiantes,
   course: "Laboratorio IV" 
}));

//! Ordenar por nombre el array creado, esto muta el array. Recuerde que puede comparar dos strings usando localeCompare

estudiantesMapeados.sort((a,b) => a.name.localeCompare(b.name));

//! Separar en dos arrays los estudiantes aprobados y desaprobados

const estudiantesAprobados = estudiantesMapeados.filter(estudiantes => estudiantes.grade > 5);

const estudiantesDesaprobados = estudiantesMapeados.filter(estudiantes => estudiantes.grade < 6);

//! Calcular el promedio de todos los estudiantes

const promedioEstudiantes = estudiantesMapeados.reduce((acumulador, estudiantes) => {
    return acumulador += estudiantes.grade
},0) / estudiantesMapeados.length;

promedioEstudiantes.toFixed(2);



class StudentRepository {
    #students
    constructor() {
        this.#students = new Map()
    }
    get students() {
        return this.#students
    }
    getStudent = function(id) {
        if(this.#students.has(id)) return this.#students.get(id)
        else throw new Error(`El estudiante con el id ${id} no existe.`) //! Manejar el error en el entorno superior
    }
    addStudent = function(estudiante) {
        if(!this.#students.has(estudiante.id)) this.#students.set(estudiante.id, estudiante);
        else throw new Error(`El estudiante con el id ${estudiante.id} ya existe`)
    }
    deleteStudent = function(id) {
        if(this.#students.has(id)) {
            this.#students.delete(id);
            return true
        } 
        else throw new Error(`El estudiante con el id ${id} no existe.`)
    }
}

class estudianteRepo {
    #estudiante
    constructor() {
        this.#estudiante = new Set();
    }
    get estudiante() {
        return this.#estudiante;
    }
    getEstudiante = function(id) {
        for (const estudiante of this.#estudiante) {
            if(estudiante.id === id) return estudiante;
        }
        return null;
    }
    addEstudiante = function(estudiante) {
        if(this.getEstudiante(estudiante.id)) throw new Error("El estudiante ya existe")
        else this.#estudiante.add(estudiante);
    }
    deleteEstudiante = function(estudiante) {
        if(this.getEstudiante(estudiante.id)) this.#estudiante.delete(estudiante);
        else throw new Error("No se encontro el estudiante")
    }
}


class userDummy {
    #id
    #password
    constructor(id, username, password, email, isActive) {
        this.#id = id
        this.username = username
        this.#password = password
        this.email = email
        this.isActive = isActive
    }
    get id() {
        return this.#id;
    }
    get password() {
        return this.#password;
    }
    set password(pass) {
        this.#password = pass;
    }
}


//!Ejercicio 9 -> Async Await
const getUsers = () => {
    return fetch('https://api.example.com/users');
}

getUsers()
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`El servidor respondió: ${response.status} ${response.statusText}`);
    }
})
.then(users => {
    users.filter(user => user.isActive)
        .sort((a, b) => a.username.localeCompare(b.username))
        .forEach(console.log);
})
.catch(console.log);

//! AHORA HAY QUE PASARLO CON ASYNC AWAIT
const url = 'https://api.example.com/users';

async function getUsers9() {
    try {
        const response = await fetch(url);
        if(response.ok){
            const users = await response.json();
            const usuariosFiltrados = users.filter(user => user.isActive).sort((a,b) => a.username.localeCompare(b.username));

            for (const user of usuariosFiltrados) {
                console.log(user)
            }
        }  else throw new Error(`El servidor respondió: ${response.status} ${response.statusText}`);
    } catch (error) {
        console.error(error);
    }
}


