export async function ejercicio1(mensaje) {
    return new Promise((resolve,reject) => {
        if (typeof mensaje !== "string"){
            reject("El tipo de dato tiene que ser un string");
        }else {
            setTimeout(()=> {
                resolve(mensaje); 
            }, 2000);
        }
    });
};

