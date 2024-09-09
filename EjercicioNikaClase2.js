function range(start, end) {
    let array = [];
    for(let i = start; i <= end; i++) array.push(i);
    return array;
};

const ejercicio1 = () => {
    const arrayRange = range(10,20);
    console.log("Mostrando el array con los rangos --> " + arrayRange);
};

function sumatoriaArray(arr) {
    let acumulador = 0;
    for(let i = 0; i < arr.length; i++) acumulador += arr[i];
    return acumulador;
};

const ejercicio2 = () => {
    const arraySumatoria = range(10,20);
    const resultadoArray = sumatoriaArray(arraySumatoria);
    console.log("El resultado de la sumatoria del array es -->" + resultadoArray);
};

function rangeConSalto(start,stop,end) {
    let array = [];
    for(let i = start; i <= end; i += stop) array.push(i);
    return array;
};

const ejercicio3 = () => {
    const arrayConSalto = rangeConSalto(10,2,20);
    console.log("Mostrando el array con salto de 2 en dos --> " + arrayConSalto);
};

function convertirArrayEnLista(array) {
    list = null;
    for(let i = 0; i < array.length; i++) {
        list = {value: array[i], next: list};
    }
    return list;
};

const ejercicio4 = () => {
    const array = [10,20,30,40,50,60,70];
    const lista = convertirArrayEnLista(array);
    console.log("Mostrando el array en forma de lista: ");
    console.log(lista);
};

function listToArray(list) {
    let array = [];
    let nodo = list; ///Nos guardamos el primer nodo
    while(nodo) { ///Recorremos todos los nodos, hasta que la lista quede vacia.
        array.push(nodo.value);
        nodo = nodo.next;
    }
    return array;
};

const ejercicio5 = () => {
    const array = [10,20,30,40,50,60,70];
    const lista = convertirArrayEnLista(array);
    const arrayDeLista = listToArray(lista);
    console.log("Mostrando la lista en forma de array: ");
    console.log(arrayDeLista);
};

function prepend(num, list) {
  return {
    value: num,
    next: list
  };
}

const ejercicio6 = () => {
    const array = [10,20,30,40,50,60,70];
    const lista = convertirArrayEnLista(array);
    const element = 5;
    const listWhitElement = prepend(element, lista);
    console.log("Mostrando la lista con ese elemento: ");
    console.log(listWhitElement);
}