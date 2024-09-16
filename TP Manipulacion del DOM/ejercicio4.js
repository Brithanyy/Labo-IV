export const ejercicio4 = () => {
    const boton2 = document.getElementById("boton2");
    boton2.addEventListener("click", () => {
        boton2.style.backgroundColor = "red";
        alert("Hiciste Click");

        setTimeout( () => {
            boton2.style.backgroundColor = "white";
        },2000)
    })
}