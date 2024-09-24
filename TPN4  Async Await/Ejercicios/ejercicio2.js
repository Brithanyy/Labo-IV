export const ejercicio2 = (num) => {
    return new Promise((resolve, reject) => {
        if(typeof num !== "number") reject("El valor ingresado tiene que ser un numero");
        else {
            setTimeout(()=> {
                resolve(num * 2);
            },1000)
        }
    })
}
