let miArray = [1,2,3,4,5];
miArray = [...miArray, 1000];
//Agrega el elemento 1000 en la ultima posicion. 

const queGuarda = miArray.filter((numero) =>  numero % 2 === 0);
//Te lo recorre por completo y te retorna otro arreglo en base a la condicion.

///Desestructurando un array:
let miArray2 = [1,2,3,4,5,6];
const [, segundo, tercero] = miArray2;

///Con el spread
const [,,...apartirDelTercero] = miArray2; 

