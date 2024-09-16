export const ejercicio11 = () => {
    const miDiv = document.getElementById("ocultarDiv");
    const boton = document.getElementById("botonID");

    boton.addEventListener("click", () => {
        miDiv.style.display = "none";
        setTimeout( () => {
            miDiv.style.display = "block";
        },1000);
    });
}