export const ejercicio3 = () => {
    const ul = document.getElementById("miLista");
    const elementosDelUl = ul.getElementsByTagName("li");
    console.log(ul);
    console.log(elementosDelUl);
    elementosDelUl[1].remove();
    console.log(elementosDelUl);
}