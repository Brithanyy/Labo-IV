//Manejo del dom

/*let elemento = document.all;
let head = document.head;
let body = document.body;
let dominio = document.domain;
let enlaces = document.links;
let imagenes = document.images;*/

import { Tarea } from "./tarea.js";

const inputTarea = document.getElementById("tarea");
//inputTarea.value = "Brisa";

console.log(inputTarea);

//ul para ir agregando las tareas
const lista = document.getElementById("lista");

// Eventos
const btnAdd = document.getElementById("btnAdd");
console.log(btnAdd);

btnAdd.addEventListener("click", () => {
    ///console.log(inputTarea.value); para acceder lo que guarda el valor del input.
    if(inputTarea.value == ''){
        alert("Error");
        return;
    } 
    const tarea = new Tarea(inputTarea.value);
    addList(tarea);
});

function addList(tarea){
    const li = document.createElement('li');
    li.style("text")
    li.textContent = tarea.nombre;
    lista.appendChild(li);
}