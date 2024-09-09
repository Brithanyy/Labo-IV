//Ejercicio 1
let miNombre = "Brisa";
console.log(miNombre);

///Ejercicio 2
let numRand1 = Math.floor(Math.random() * 101);
let numRand2 = Math.floor(Math.random() * 101);
const suma = (num1, num2 ) => num1 + num2;
console.log(suma(numRand1,numRand2));

///Ejercicio 3
const PI =  Math.PI;
console.log(PI);

///Ejercicio 4
const saludar = (nombre) => console.log("Hola", `${nombre}`,"Como estas?");
console.log(saludar(miNombre));

///Ejercicio 5
const esPar = (num) => { 
    if(num % 2 == 0) console.log("El numero", `${num}`, "es par");
    else console.log("El numero", `${num}`, "no es par");
    };
console.log(esPar(numRand1));

///Ejercicio 6
let array = [10,20,30,40,50];
const sumaArray = (arr) => {
    let acumulador = 0;
    arr.forEach(element => {
        acumulador += element;
    });
    return acumulador;
}
console.log("La suma de cada elemento del array es ", `${sumaArray(array)}`);

///Ejercicio 7
let persona = {
    nombre: "Brisa",
    edad: 22,
    profesion: "Developer"
};
console.log(persona);

///Ejercicio 8
function Producto(nombre, precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
};
let producto1 = new Producto("Notebook", 500, 3);
console.log(producto1);

///Ejercicio 9
function Pelicula(titulo, director, anio){
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
};
let pelicula1 = new Pelicula("El señor de los anillos", "Robie Williams", 2002);
console.log(pelicula1);

///Ejercicio 10
let frutas = ["Naranja", "Pera", "Mandarina", "Banana", "Frutilla"];
console.log("La fruta que esta en el indice 3 es la", `${frutas[2]}`);

///Ejercicio 11
frutas.push("Mango")
console.log(frutas);

///Ejercicio 12
let nuevoArray;
const filtrarPares = () => {
    for(let i = 0; i < frutas.length; i++) if(frutas[i] % 2 == 0) nuevoArray.push(frutas[i]);
    return nuevoArray;
};

///Ejercicio 13
const crearPersona = (nombrePersona, edadPersona) => {    
    let persona = {
        Nombre: nombrePersona,
        Edad: edadPersona
    };
    return persona;
}
let personaCreada = crearPersona("Valen", 23);
console.log(personaCreada);

///Ejercicio 14
const obtenerInfo = (objeto) => {
    if(objeto instanceof Object && objeto != null){
        console.log("Mostrando el Objeto pasado por parametro: ");
        for(let info in objeto) console.log(`${info}:`,`${objeto[info]}`); 
    }else console.log("No es un objeto o el mismo esta vacio.");
}
obtenerInfo(personaCreada);

///Ejercico 15

let arrayNumRandom = [];
for(let i = 0; i < 10; i++){
    arrayNumRandom.push( Math.floor(Math.random() * 11));
}
const duplicarArrayNumRepetidos = (arr) => {
    let nuevoArray = [];
    
    for(let i = 0; i < arr.length; i++){
        let inicio = arr[i];
        let contadorDuplicados = 0; 
        if(nuevoArray.includes(inicio)) continue;
        for(let j = 0; j < arr.length; j++){
            if(inicio === arr[j]) contadorDuplicados++;
        }
        if(contadorDuplicados > 1) nuevoArray.push(inicio);
    }
    return nuevoArray;
}
console.log("Mostrando el array original: ", arrayNumRandom);
let nuevoArrayConRepetidos = duplicarArrayNumRepetidos(arrayNumRandom);
console.log("Mostrando nuevo array con numeros duplicados: ", nuevoArrayConRepetidos);

///Ejercicio 16
let cadena = "bola";

const invertirCadena = (string) => {
    let cadenaInvertida = "";
    for(let i = string.length - 1; i >= 0; i--) cadenaInvertida += string[i];
    return cadenaInvertida;
}
let invertida = invertirCadena(cadena);
console.log("Mostrando la cadena invertida: ", invertida);

///Ejercicio 17
const arrayPalabras = ["Hola", "Chau", "Buenos", "Dias", "Sol", "Luna", "Noche"];

const filtrarPorLongitud = (arr, longitud) => {
    let nuevoArray = [];
    for(let i = 0; i < arr.length; i++) if(arr[i].length >= longitud) nuevoArray.push(arr[i]);
    return nuevoArray;
}

let arrayFiltrado = filtrarPorLongitud(arrayPalabras, 5);
console.log("Mostrando el array de palabras con longitud mayor a 5: " + `${arrayFiltrado}`);

///Ejercicio 18
function Estudiante(nombre, edad, promedio){
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
};

const estudiante1 = new Estudiante("Brisa Ortiz", 22, 9.66);
const estudiante2 = new Estudiante("Carlos Carpaneto", 34, 8.99);
const estudiante3 = new Estudiante("Valentino Carpaneto", 7, 10);

let estudiantes = [];
estudiantes.push(estudiante1);
estudiantes.push(estudiante2);
estudiantes.push(estudiante3);

console.log(estudiantes);

///Ejercicio 19
const nombreBuscar = estudiante1.nombre;

const buscarEstudiante = (nombreEstudiante, arrEstudiantes) => {
    for(let i = 0; i < arrEstudiantes.length; i++) if(arrEstudiantes[i].nombre === nombreEstudiante) return arrEstudiantes[i];
    return null;
}

let alumnoEncontrado = buscarEstudiante(nombreBuscar, estudiantes);
if(alumnoEncontrado != null) console.log(alumnoEncontrado);
else console.log("No se encontro el alumno con el nombre " + `${nombreBuscar}`);

//Ejercicio 20
const promedioClase = (estudiantes) => {
    let acumulador = 0;
    for(let i = 0; i < estudiantes.length; i++) acumulador += estudiantes[i].promedio;
    let promedio = acumulador / estudiantes.length;
    return promedio;
}
const promedioDeLaClase = promedioClase(estudiantes);
console.log("El promedio del promedio de los alumnos es: " + `${promedioDeLaClase.toFixed(2)}`);

//Ejercicio 21

class Coche {
  
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    arrancar() { console.log("Auto en marcha."); }
    detener() { console.log("Auto frenado."); }
}

const coche1 = new Coche("Ford Fiesta", "Kinetic", 2017);
coche1.arrancar();
coche1.detener();

//Ejercicio 22

function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludo = function() { console.log("Welcome", this.nombre); };

let personita = new Persona("Paola Colino", 44);
personita.saludo();

//Ejercicio 23

function Carrito(){
    this.productos = [];
    this.agregarProducto = function (unProducto) {
        this.productos.push(unProducto);
    }
    this.mostrar = function () {
        console.log("Productos: ");
        console.log(this.productos);
    }
}
const miCarrito = new Carrito();

miCarrito.agregarProducto(producto1);
miCarrito.mostrar();

///Ejercicio 24
const ordenarNumeros = (arr) => {
    let arrayOrdenado = arr.slice();
    
    for(let i = 0; i < arrayOrdenado.length; i++){
        for(let j = i + 1; j < arrayOrdenado.length; j++){
            if(arrayOrdenado[i] > arrayOrdenado[j]){
                let buffer = arrayOrdenado[i];
                arrayOrdenado[i] = arrayOrdenado[j];
                arrayOrdenado[j] = buffer;
            }
        }
    }
    return arrayOrdenado;
}

const ejercicio24 = () => {
    const arrayDesordenado = [15,20,1,6,4];
    let arrayOrdenadoMenorMayor = ordenarNumeros(arrayDesordenado);
    console.log("Mostrando el arreglo desordenado: ");
    console.log(arrayDesordenado);
    console.log("Mostrando el array ordenado: ");
    console.log(arrayOrdenadoMenorMayor);
}

//Ejercicio 25
const ejercicio25 = () => {
    const nombreAEliminar = "Carlos Carpaneto";
    let seElimino = eliminarEstudiante(estudiantes, nombreAEliminar);
    if(seElimino) console.log("Estudiante eliminado Correctamente.");
    else console.log("No se pudo eliminar el estudiante.");
    console.log("Mostrando el arreglo sin ese estudiante: ");
    console.log(estudiantes);
    
}
const eliminarEstudiante = (estudiantes, nombreEliminar) => {
    let eliminado = false;
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre === nombreEliminar) {
            estudiantes.splice(i,1);
            eliminado = true;
            return eliminado;
        } 
    }
    return eliminado;
}

//Ejercicio 26

const ejercicio26 = () => {
    let productosDelCarrito = new Carrito();
    let producto2 = new Producto("Iphone 13", 800, 6);
    let producto3 = new Producto("Mate", 200, 18);
    productosDelCarrito.agregarProducto(producto1);
    productosDelCarrito.agregarProducto(producto2);
    productosDelCarrito.agregarProducto(producto3);
    let totalPrecioCarrito = totalCarrito(productosDelCarrito);
    console.log("El total del carrito es de: ", `${totalPrecioCarrito}`);
}

const totalCarrito = (carrito) => {
    let acumulador = 0;
    for(let i = 0; i < carrito.productos.length; i++) {
        acumulador += carrito.productos[i].precio;
    }
    return acumulador;
}

//Ejercicio 27

const ejercicio27 = () => {
    function Calculadora(){
    
        this.sumar = function (num1,num2){
            return num1 + num2;
        }
        this.restar = function (num1,num2){
            return num1 - num2;
        }
        this.dividir = function (num1,num2){
            return num1 / num2;
        }
        this.multiplicar = function (num1,num2){
            return num1 * num2;
        }
    }

    let miCalculadora = new Calculadora();

    let resultadoSuma = miCalculadora.sumar(5,5);
    let resultadoResta = miCalculadora.restar(15,5);
    let resultadoDivision = miCalculadora.dividir(20,4);
    let resultadoMultiplicacion = miCalculadora.multiplicar(5,5);
    console.log("RESULTADO DE LA SUMA: " + resultadoSuma);
    console.log("RESULTADO DE LA RESTA: " + resultadoResta);
    console.log("RESULTADO DE LA DIVISION: " + resultadoDivision);
    console.log("RESULTADO DE LA MULTIPLICACION: " + resultadoMultiplicacion);
}

///Ejercicio 28

const ejercicio28 = () => {
    let miCuentaBancaria = crearCuentaBancaria();
    miCuentaBancaria.depositar(1500);
    miCuentaBancaria.verSaldo();
    miCuentaBancaria.retirar(2000);
}
const crearCuentaBancaria = () => {
    function CuentaDeBanco(){
        this.saldo = 0;
        this.depositar = function (monto) {
            if(monto < 0) console.log("Ingrese un monto mayor a 0");
            else this.saldo = monto;
        }
        this.retirar = function (monto) {
            if(monto > this.saldo) console.log("El monto a retirar supera el saldo de la cuenta");
            else this.saldo = this.saldo - monto;
        }
        this.verSaldo = function () { console.log("Su saldo es de $" + this.saldo); }
    }
    return new CuentaDeBanco();
}

//Ejercicio 29

const ejercicio29 = () => {
    let libro = crearLibro();
    libro.detalles();
}

const crearLibro = () => {
    function Libro(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.detalles = function () {
            console.log("---------------------------------");
            console.log("Titulo: " + this.titulo);
            console.log("Autor: " + this.autor);
            console.log("Paginas: " + this.paginas);
            console.log("---------------------------------");
        }
    }
    let miLibro = new Libro("La piedra filosofal", "Brisa Ortiz", 900);
    return miLibro;
}

//Ejercicio 30
const ejercicio30 = () => {
    function Tarea(nombreDeLaTarea, descripcionDeLaTarea, fechaInicioTarea) {
        this.nombreTarea = nombreDeLaTarea;
        this.descripcionTarea = descripcionDeLaTarea;
        this.inicioTarea = fechaInicioTarea;
        this.estadoTarea = " ";  ///Pendiente, completada o finalizada.
        this.activo = false;
        this.mostrarTarea = function () {
            console.log("---------------------------------------------");
            console.log("Tarea: " + this.nombreTarea);
            console.log("Descripcion: " + this.descripcionTarea);
            console.log("Fecha: " + this.inicioTarea);
            console.log("Estado: " + this.estadoTarea);
            console.log("Tarea Terminada: " + this.activo);
            console.log("---------------------------------------------");
        };
        this.finalizarTarea = function () { 
            this.activo = false; 
            this.estadoTarea = "Finalizada";
        }
        this.iniciarTarea = function () { 
            this.activo = true; 
            this.estadoTarea = "Pendiente";
        }
    };
    function Tareas(){
        this.tareas = [];
        this.agregarTarea = function(unaTarea){ 
            this.tareas.push(unaTarea);
         };
         this.buscarTarea = function (nombreTareaBuscar) {
            for(let i = 0; i < this.tareas.length; i++) if(this.tareas[i].nombreTarea == nombreTareaBuscar) return this.tareas[i];
            return null;
         };
         this.eliminarTarea = function (nombreTareaEliminar){
            let encontrado = this.buscarTarea(nombreTareaEliminar);
            if(encontrado != null) this.tareas.splice(encontrado,1);
            else console.log("La tarea a eliminar no se encuentra en la lista de tareas. ");
         };
         this.mostrarTareas = function () {
            for(let i = 0; i < this.tareas.length; i++) {
                this.tareas[i].mostrarTarea();
            }
         }
    }

    let tarea1 = new Tarea("Entrenamiento", "Partido de Futbol sintetico 21hs a 23hs", "16/08/2024");
    let tarea2 = new Tarea("Suplemento", "Comprar Suplementos: Creatina y Proteina", "10/08/2024");
    tarea1.iniciarTarea();
    tarea2.iniciarTarea();
    let listaDeTareas = new Tareas();
    listaDeTareas.agregarTarea(tarea1);
    listaDeTareas.agregarTarea(tarea2);
    listaDeTareas.mostrarTareas();
} 

