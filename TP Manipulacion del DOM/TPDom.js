
import { ejercicio1 } from "./ejercicio1.js";

import { ejercicio2 } from "./ejercicio2.js";

import { ejercicio3 } from "./ejercicio3.js";

import { ejercicio4 } from "./ejercicio4.js";

const ejercicio5 = () => {
    const cuadrado = document.getElementById("cuadrado");
    cuadrado.addEventListener("mouseover", () => {
        cuadrado.style.backgroundColor = "#274156";
    })
    cuadrado.addEventListener("mouseout", () => {
        cuadrado.style.backgroundColor = "blue";
    })
}

const ejercicio6 = () => {
    const botonForm = document.getElementById("botonFormulario");
    const textoForm = document.getElementById("campo");
    const formulario = document.getElementById("formulario");
    botonForm.addEventListener("click", () => {
        const parrafo = document.createElement("p");
        parrafo.textContent = textoForm.value;
        formulario.appendChild(parrafo);
    })
}

const ejercicio7 = () => {
    const teclaClickeada = document.getElementById("teclaClickeada");
    document.addEventListener("keydown", (tecla) => {
        teclaClickeada.textContent = tecla.key;
        console.log(tecla.key);
        document.appendChild(teclaClickeada);
    })
}

const colorAleatorio = () => {
    const max = 16777215;
    return "#" + Math.floor(Math.random() * max).toString(16).padStart(6, '0');
 }

 const ejercicio8 = () => {
    const ulLista = document.getElementsByClassName("lista2");
    console.log(ulLista);
    for(let i = 0; i < ulLista.length; i++) {
        ulLista[i].addEventListener("click", () => {
            ulLista[i].style.backgroundColor = colorAleatorio();
             setTimeout(() => {
                   ulLista[i].style.backgroundColor = "transparent";
              },2000)
         })
      }
}

const ejercicio9 = () => {
    let contador = 0;
    const contadorClick = document.getElementById("click");
    const divBoton = document.getElementById("divDelBotonClick");
     contadorClick.addEventListener("click",() => {
        contador += 1;
        console.log(contador);
        const parrafo = document.createElement("p");
        parrafo.textContent = contador;
        divBoton.appendChild(parrafo);
        setTimeout(() => {
             parrafo.remove();
        },1000)
    })
}

const ejercicio10 = () => {
    const imagen = document.getElementById("imagen");
    const parrafoImagen = document.getElementById("parrafoImagen");
    parrafoImagen.style.display = "none";

    imagen.addEventListener("click", () => {
        parrafoImagen.style.display = "block";
        parrafoImagen.textContent = "Nueva Lata de Aperol Spritz !!!";
        parrafoImagen.style.backgroundColor = "#FB5012";
        parrafoImagen.style.color = "white";
        setTimeout( () => {
            parrafoImagen.style.display = "none";
        },1000);
    });
}

import { ejercicio11 } from "./ejercicio11.js";

const ejercicio12 = () => {
    const selecMenu = document.getElementById("lang");
    selecMenu.addEventListener("change", () => {
        const opcionSeleccionada = selecMenu.value;
        console.log(opcionSeleccionada);
    })
}

const ejercicio13 = () => {
    
    const actualizarSegundos = () => {
        const horaActual = new Date();
        const hora = String(horaActual.getHours()).padStart(2, '0');
        const minutos = String(horaActual.getMinutes()).padStart(2, '0');
        const segundos = String(horaActual.getSeconds()).padStart(2, '0');

        const mostrarSegundos = document.getElementById("segundosActual");
        mostrarSegundos.textContent = `${hora}:${minutos}:${segundos}`;
    }
    setInterval(actualizarSegundos, 1000);  
}

/*
ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
ejercicio8();
ejercicio9();
ejercicio10();
ejercicio11();
ejercicio12();
ejercicio13();
*/