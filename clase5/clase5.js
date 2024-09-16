const promesa = () => {
    return new Promise( (resolve,reject)=> {
        let ok = true; //Si esto fuera falso, lanza el error y lo manejamos con el catch de abajo al llamar a la funcion
        if(ok) {
            resolve("Promesa Cumplida");
        }else reject("Fallo");
    });
};

promesa()
    .then(result => console.log(result)) //El caso de exito esta dentro del then en este caso nos mostraria el mensaje de resolve
    .catch(error => console.log(error)) //Aqui nos va a mostrar si ocurre algun error,es decir, maneja el error

    