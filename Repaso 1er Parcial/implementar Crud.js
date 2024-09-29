
//! PRACTICANDO EL CRUD

const url = "https://my-api.com/users"

const getUsers2 = () => {
    fetch(url)
        .then(response => {
            if(response.status !== 200) throw new Error("Error al obtener la informacion")
            return response.json()
        })
        .then(usuarios => console.log("Mostrando los usuarios: ", usuarios))
        .catch(err => console.error(err))
}

const postUser2 = (nuevoUsuario) => { //! EL POST ES PARA AGREGAR UN USUARIO
    fetch(url, {method: 'POST', body: JSON.stringify(nuevoUsuario), headers: {'Content-Type':'application/json'}})
        .then(response => {
            if(response.status !== 201) throw new Error("Error al agregar el nuevo usuario");
            return response.json()
        })
        .then(user => console.log("Usuario agregado con exito", user))
        .catch(err => console.error(err))       
}

const updateUser2 = (id, usuario) => { //! EL UPDATE ES PARA ACTUALIZAR
    fetch(url+"/"+id, {method: 'PUT', body: JSON.stringify(usuario), headers: {'Content-Type': 'application/json'}})
        .then(response => {
            if(response.status !== 200) throw new Error("Error al modificar el usuario")
            return response.json()
        })
        .then(user => console.log("Usuario actualizado con exito.", user))
        .catch(err => console.error(err))
}

const deleteUser2 = (id) => { //! EL DELETE ES PARA BORRAR
    fetch(url + "/"+ id, {method: 'DELETE'})
        .then(response => {
            if(response.status !== 204) throw new Error("Error al eliminar");
            else return "Usuario eliminado con exito"
        })
        .catch(err => console.error(err))
}