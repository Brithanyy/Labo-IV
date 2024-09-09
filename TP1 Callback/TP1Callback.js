const array = [2,4,6,8,10,12,14,16,18,20];
const acumulador = array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

const ejercicio1 = () => {

    const mostrarMensaje = (mensaje, callback) => {
        console.log("Mostrando el mensaje en la callback...");
        callback(mensaje);
    }
    
    const mensaje = "Hello world";  
    
    mostrarMensaje(mensaje, (mensaje) => console.log(mensaje));    
}

const ejercicio2 = () => {

    const sumar = (num1,num2, callback) => {
        const resultado = num1 + num2;
        return callback(resultado);
    }

    sumar(10,15, (resultado) => console.log("El resultado es: " + resultado));
}

const ejercicio3 = () => {
    const mensaje = "Este mensaje se verá luego del setTimeOut";
    const retraso = (mensaje,callback) => {
        setTimeout(() => {
            return callback(mensaje);
        }, 1000);
    }
    
    retraso(mensaje,(mensaje) => console.log(mensaje));
}

const ejercicio4 = () => {

    const usuario = {
        nombre: "Brisa",
        apellido: "Ortiz",
        id: 1
    };
    let arrayUsuarios = [];
    arrayUsuarios.push(usuario);

    const obtenerDatos = (arrayUsuarios, id, callback) => {
        arrayUsuarios.forEach(element => {
            if(element.id === id) {
                setTimeout(() => {
                    return callback(element);
                }, 3000);
            } else return callback(null);
        });
    }

    obtenerDatos(arrayUsuarios,1, (usuario) =>  {
        if(usuario != null){
            console.log("Informacion del Usuario:");
            console.log(usuario);
        }else console.log("No se encontro el usuario");
    });
}

