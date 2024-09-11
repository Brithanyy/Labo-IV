const ejercicio1 = () => {

    const multiplicar = (num1, num2, callback) => {
        const resultado = num1 * num2;
        return callback(resultado);
    };
    multiplicar(5,5, (resultado) => console.log("El resultado de la multiplicacion es: " + resultado));
};

const ejercicio2 = () =>  {
    const num1 = 5;
    const num2 = 10;
    const operacion = (num1, num2, callback) => {
        return callback(num1, num2);
    }

    operacion(num1,num2,(num1,num2) => console.log(num1 + num2));
    operacion(num1,num2,(num1,num2) => console.log(num1 - num2));
};

const ejercicio3 = () => {

    const msj = "Esto es un callback :D";
    const retraso = (msj,callback) => {
        setTimeout(() => {
            return callback(msj);
        },2000);
    };

    retraso(msj,(msj) => console.log(msj));
};

const ejercicio4 = () => {

    const array = [1,2,3,4,5,6,7,8,9,10];

    const filtrarPares = (array, callback) => {
        return callback(array);
    };
    filtrarPares(array, (array) => {
        let arrayPares = [];
        array.forEach(element => {
            if(element % 2 === 0) arrayPares.push(element);
            });
            console.log("Mostrando el array de pares: ");
            console.log(arrayPares);
    });
};

const ejercicio6 = () => {

    let miSet = new Set([1,2,3,4,5]);

    const manipularSet = (miSet, callback) => {
        return callback(miSet);
    }

    manipularSet(miSet, (miSet) => {
        miSet.add(6);
        const seElimino =  miSet.delete(5);
        console.log(seElimino);
        console.log("Mostrando el Set");
        console.log(miSet);
    });
};

const ejercicio7 = () => {

    let miSet = new Set([1,2,3,4,5]);

    const convertirSetEnArray = (miSet, callback) => {
        return callback(miSet);
    };

    convertirSetEnArray(miSet, (miSet) => {
        let array = [...miSet];
        console.log("Mostrando el array de Set");
        console.log(array);
    });
};

const ejercicio8 = () => {

    let array = [1,2,2,3,4,4,5];

    const eliminarDuplicadosConSet = (array, callback) => {
        return callback(array);
    };

    eliminarDuplicadosConSet(array, (array) => {
        let miSet = new Set(array);
        console.log("Mostrando el Set sin duplicados: ");
        console.log(miSet);
    });
};

const ejercicio9 = () => {

    let miSet = new Set([1,2,3,4,5]);
    const elemento = 4;

    const existeElElemento = (miSet, elemento, callback) => {
        return callback(miSet, elemento);
    };
    existeElElemento(miSet,elemento, (miSet,elemento) => {
        console.log(miSet.has(elemento));
        console.log("El elemento", `${elemento}`," existe en el Set");
    });
};

const ejercicio10 = () => {
    let miSet = new Set([1,2,3,4,5]);

    mostrarSet = (miSet, callback) => {
        return callback(miSet);
    };
    mostrarSet(miSet, (miSet) => {
        const arr = [...miSet];
        arr.forEach((numero, indice) => {
            console.log(`Índice: ${indice}, Valor: ${numero}`);
        });
    });
};

const ejercicio11 = () => {
    const crearMapa = () => {
        mapa = new Map();
        mapa.set("nombre", "Juan");
        mapa.set("edad", "30");
        mapa.set("Ciudad", "Madrid");
        return mapa;
    };
    let miMapa = crearMapa();
    console.log("Mostrando el mapa: ");
    console.log(miMapa);
    miMapa.delete("ciudad");
    console.log(miMapa);
};

const ejercicio12 = () => {
    mapa = new Map();
    mapa.set("nombre", "Juan");
    mapa.set("edad", "30");
    mapa.set("Ciudad", "Madrid");
    const valor = "nombre";
    const mostrandoValorMap = (valor, mapa, callback) => callback(mapa,valor);
   
    mostrandoValorMap(valor, mapa, (mapa, valor) => {
        if(mapa.has(valor)) console.log("clave = " + valor + " valor = " + mapa.get(valor));
        else console.log("No se encontro.");
    });
};

const ejercicio13 = () => {
    mapa = new Map();
    mapa.set("nombre", "Juan");
    mapa.set("edad", "30");
    mapa.set("Ciudad", "Madrid");

    const recorrerMap = (mapa) => {
        mapa.forEach((valor,clave) => console.log(`${clave}: ${valor}`));
    };
    recorrerMap(mapa);
};

const ejercicio14 = () => {
    mapa = new Map();
    mapa.set("nombre", "Juan");
    mapa.set("edad", "30");
    mapa.set("Ciudad", "Madrid");

    function encontrarKey(mapa, key) {
        if(mapa.has(key)) console.log("La clave " + key + " existe");
        else console.log("La clave" + key + " no existe");
    };
    encontrarKey(mapa,"edad");
};

const ejercicio15 = () => {
    mapa = new Map();
    mapa.set("nombre", "Juan");
    mapa.set("edad", "30");
    mapa.set("Ciudad", "Madrid");
    function convertirMapEnArray(map) {
        let array = new Array(...map);
        return array;
    }
    let array = convertirMapEnArray(mapa);
    console.log("Mostrando el array: ");
    console.log(array); 
};

/* EJERCICIOS AVANZADOS */

const ejercicioA1 = () => {
    let arrayDeObjetos = [{ nombre: "Juan", edad: 20 }, { nombre: "María",edad: 25 }, { nombre: "Pedro", edad: 30 }];
    console.log(arrayDeObjetos);
    let mapa = new Map();
    arrayDeObjetos.forEach((dato) => {
        mapa.set(dato.nombre, dato.edad);
    });
    console.log("Mostrando el mapa: ");
    console.log(mapa);

    let nuevoArreglo = [];
    mapa.forEach((valor,clave) => {
        nuevoArreglo.push(clave);
    });
    console.log("Mostrando el arreglo con solo los nombres: ");
    console.log(nuevoArreglo);
};

const ejercicioA2 = () => {
    let arrayDeObjetos = [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana",edad: 23 }, { nombre: "Luis", edad: 16 }];

    let arrayMayoresDeEdad = arrayDeObjetos.filter(object => object.edad >= 18);
    console.log("Mostrando solo las personas > a 18: ");
    console.log(arrayMayoresDeEdad);
};

 const ejercicioA3 = () => {
     const numeros = [2, 3, 4, 2, 3, 5, 4, 5, 6];

     let mapa = new Map();

     numeros.forEach((num) => {
        if(mapa.has(num)) mapa.set(num, mapa.get(num) + 1);
        else mapa.set(num, 1);
     });
     console.log("Mostrando el map");
     console.log(mapa);
 };

 const ejercicioA4 = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosPares = array.filter(numeros => (numeros % 2) === 0);

    let sumaDeCuadrados = 0;
    numerosPares.forEach(num => {
        sumaDeCuadrados += num ** 2;
    });
    console.log("La suma de los cuadrados de los numeros pares es de: " + sumaDeCuadrados);
 };

 const ejercicioA5 = () => {
    let object =  { a: 1, b: 2, c: 3 };

    let mapa = new Map();

    for(let clave in object) {
        mapa.set(clave, object[clave]);
    };

    console.log("Mostrando mapa: ");
    console.log(mapa);
 };

 const ejercicioA6 = () => {
    let mapa = new Map([["nombre", "Pedro"], ["edad", 30], ["ciudad", "Sevilla"]]);
    let obj = {};
    mapa.forEach((valor,clave) => {
        obj[clave] = valor;
    });
    console.log("Mostrando el objeto: ");
    console.log(obj);
 };