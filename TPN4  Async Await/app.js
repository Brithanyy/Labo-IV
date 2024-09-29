import { ejercicio1 } from "./Ejercicios/ejercicio1.js";
import { ejercicio2 } from "./Ejercicios/ejercicio2.js";
import { ejercicio3 } from "./Ejercicios/ejercicio3.js"

// ejercicio1("Brisa")
//     .then(res => console.log(res))
//     .catch((err) => console.error(err));

try {
    const res = await ejercicio1("Brisa");
    console.log(res);
} catch (error) {
    console.error(error)
}

ejercicio2(5)
    .then(response => console.log(response))
    .catch(err => console.error(err));

ejercicio3();

