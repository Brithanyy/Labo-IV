
const ejercicio1 = () => {
    const miParrafo = document.getElementById("miParrafo");
    const botonParrafo = document.getElementById("botonParrafo");
    
    botonParrafo.addEventListener('click', () => {
        miParrafo.innerText = "Hola Mundo :D";
    });  
}

const ejercicio2 = () => {
const resaltado = document.getElementById("miDiv");
resaltado.classList.add("resaltado"); ///Le agregamos una clase al div
console.log(resaltado);
}

const ejercicio3 = () => {
    const ul = document.getElementById("miLista");
    const elementosDelUl = ul.getElementsByTagName("li");
    console.log(ul);
    console.log(elementosDelUl);
    elementosDelUl[1].remove();
    console.log(elementosDelUl);
}

const ejercicio4 = () => {
    const boton2 = document.getElementById("boton2");
    boton2.addEventListener("click", () => {
        boton2.style.backgroundColor = "red";
        alert("Hiciste Click");

        setTimeout( () => {
            boton2.style.backgroundColor = "white";
        },2000)
    })
}

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
        document.appendChild(teclaClickeada);
    })
}

/*
ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
*/
ejercicio7();