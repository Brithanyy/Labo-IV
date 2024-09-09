let array = [10,20,30,40,50,5,95,40,40,40];
let array2 = [2,4,6,8,10];

const sumarElementosArray = (arr) => {
    let acumulador = 0;
    for(let i = 0; i < arr.length; i++) acumulador += arr[i];
    return acumulador;
}

const ejercicio1 = () => {
    const resultadoSumaArray = sumarElementosArray(array);
    console.log("Array: " + array);
    console.log("Suma de sus elementos: " + resultadoSumaArray);
}

const promedioElementosArr = (arr) => {
    const suma = sumarElementosArray(arr);
    const promedio = suma / arr.length;
    return promedio;
}

const ejercicio2 = () => {
    const resultadoPromedio = promedioElementosArr(array);
    console.log("El promedio de los elementos del array es: " + resultadoPromedio);
}

const numMaxArr = (arr) => {
    let mayor = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(mayor < arr[i]) mayor = arr[i];
    }
    return mayor;
}

const numMinArr = (arr) => {
    let menor = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(menor > arr[i]) menor = arr[i];
    }
    return menor;
}

const ejercicio3 = () => {
    const elemntoMayor = numMaxArr(array);
    const elementoMenor = numMinArr(array);
    console.log("El elemento mayor del array es: " + elemntoMayor);
    console.log("El elemento menor del array es : " + elementoMenor);
}

const encontrarElementoArray = (arr, elemento) => {
    for(let i = 0; i < arr.length; i++) if(elemento == arr[i]) return i;
    return null;
}

const ejercicio4 = () => {
    const elementoEncontrado = encontrarElementoArray(array, 40);
    if(elementoEncontrado != null) console.log("El elemento se encontro. El elemento es ---> " + array[elementoEncontrado]);
    else console.log("No se encontro el elemento a buscar."); 
}

const filtrarPares = (arr) => {
    let arrayPares = [];
    for(let i = 0; i < arr.length; i++) if(arr[i] % 2 == 0) arrayPares.push(arr[i]);
    return arrayPares;
}

const filtrarImpares = (arr) => {
    let arrayImpares = [];
    for(let i = 0; i < arr.length; i++) if(arr[i] % 2 != 0) arrayImpares.push(arr[i]);
    return arrayImpares;
}

const ejercicio5 = () => {
    const arrayDePares = filtrarPares(array);
    const arrayDeImpares = filtrarImpares(array);
    console.log("Array de elementos pares: " + arrayDePares);
    console.log("Array de elementos impares: " + arrayDeImpares);
}

const eliminarDuplicados = (arr, elemento) => {
    let i = 0;
      while(i < arr.length){
        if(arr[i] == elemento) arr.splice(i,1);
        i++;
      }
      return arr;
}

const ejercicio6 = () => {
    console.log("Array: " + array);
    const arraySinDuplicados = eliminarDuplicados(array,40);
    console.log("Array sin duplicados: " + arraySinDuplicados);
}

const ordenarArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let menor = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[menor]) {
               menor = j;
            }
        }
        if(menor != i) {
            let buffer = arr[i];
            arr[i] = arr[menor];
            arr[menor] = buffer;
        }
    }
    return arr;
}

const ejercicio7 = () => {
    console.log("Array: " + array);
    const arrayOrdenado = ordenarArray(array);
    console.log("Array ordenado: " + arrayOrdenado);
}

const eliminarTodasLasOcurrencias = (arr, elemento) => {
    let arraySinElementosDuplicados = eliminarDuplicados(array,elemento);
    for(let i = 0; i < arraySinElementosDuplicados.length; i++) if(arraySinElementosDuplicados[i] == elemento) arraySinElementosDuplicados.splice(i,1);
    return arraySinElementosDuplicados;
}

const ejercicio8 = () => {
    console.log("Array: " + array);
    let nuevoArray = eliminarTodasLasOcurrencias(array, 40);
    console.log("Mostrando que el numero 40 no esta en el arreglo: " + nuevoArray);
}

const combinandoArreglosSinElementosDuplicados = (array1, array2) => {
    let arrayCombinado = [];
    for(let i = 0; i < array1.length; i++) arrayCombinado.push(array1[i]);
    for(let i = 0; i < array2.length; i++) arrayCombinado.push(array2[i]);
    arrayCombinado = eliminarDuplicados(arrayCombinado,40);
    arrayCombinado = eliminarDuplicados(arrayCombinado, 10);
    return arrayCombinado;
}

const ejercicio9 = () => {
    let arrayNuevo = combinandoArreglosSinElementosDuplicados(array, array2);
    console.log("Mostrando el array combinado: " + arrayNuevo);
}

const ejercicio10 = () => {
    function Producto(nombre,cantidades){
        this.nombre = nombre;
        this.cantidades = cantidades;
        this.mostrarProducto = function () {
            console.log("------------------------------------");
            console.log("Producto: " + this.nombre);
            console.log("Cantidad: " + this.cantidades);
            console.log("------------------------------------");
        }
    }
    function ListaDeCompras() {
        this.lista = [];
        this.agregarProducto = function (Producto) {
            this.lista.push(Producto);
        }
        this.mostrarLista = function () {
            for(let i = 0; i < this.lista.length; i++) this.lista[i].mostrarProducto();
        }
    }
    let lista = new ListaDeCompras();
    const producto1 = new Producto("Proteina", 3);
    const producto2 = new Producto("Creatina", 3);
    lista.agregarProducto(producto1);
    lista.agregarProducto(producto2);
    lista.mostrarLista();
}

const ejercicio11 = () => {
    function Contacto(nombre,numero,correo){
        this.nombre = nombre;
        this.numero = numero;
        this.correo = correo;
        this.mostrarContacto = function () {
            console.log("------------------------------------");
            console.log("Nombre del Contacto: " + this.nombre);
            console.log("Numero: " + this.numero);
            console.log("Correo: " + this.correo);
            console.log("------------------------------------");
        }
    }
    function AgendaDeContactos() {
        this.listaContactos = [];
        this.mostrarContactos = function () {
            console.log("Lista de contactos: ");
            for(let i = 0; i < this.listaContactos.length; i++) this.listaContactos[i].mostrarContacto();
        }
        this.agregarContacto = function (contacto) { this.listaContactos.push(contacto); }
    }
    const contactos = new AgendaDeContactos();
    const num1 = new Contacto("Brithany", 2235942827, "Brisa-ortiz@gmail.com");
    contactos.agregarContacto(num1);
    contactos.mostrarContactos();
}