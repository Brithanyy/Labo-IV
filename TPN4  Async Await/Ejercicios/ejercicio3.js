import { ejercicio1 } from "./ejercicio1.js";
import { ejercicio2 } from "./ejercicio2.js";



export const ejercicio3 = () => {
    const promesas = [ejercicio1("Este es el mensaje que se tiene que ver"), ejercicio2(10)];

    Promise.all(promesas)
        .then(res => console.log(res))
        .catch(err => console.log(err))
 }
