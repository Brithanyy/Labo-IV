export const ejercicio1 = () => {
    const miParrafo = document.getElementById("miParrafo");
    const botonParrafo = document.getElementById("botonParrafo");
    
    botonParrafo.addEventListener('click', () => {
        miParrafo.innerText = "Hola Mundo :D";
    });  
}