/* const apiJsonPlaceHolder = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => console.log(response))
}
apiJsonPlaceHolder();
*/
const apiUrl = "https://jsonplaceholder.typicode.com/users"

const apiJsonPlaceHolder = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const elemento = document.getElementById("infoAppi");
            if(elemento){ //Si existe el elemento
                let listaHMTL = "<ul>"
                let listaHTML2 = "<ul>"
                for(let i = 0; i < 10; i++) {
                    listaHMTL += `<li>name ${i+1}: ${data[i]["name"]}</li>`
                    listaHTML2 += `<li>username ${i+1}: ${data[i]["username"]}</li>`
                }
                listaHMTL += "</ul>";
                listaHTML2 += "</ul>";
                //elemento.innerHTML = listaHMTL + listaHTML2;
                elemento.innerHTML = `<div class="list-container">${listaHMTL}${listaHTML2}</div>`; ///Para que queden al lado y no una abajo de la otra
            } 
        })
        .catch(err => console.error("Error al realizar la peticion " + err))
}
apiJsonPlaceHolder()