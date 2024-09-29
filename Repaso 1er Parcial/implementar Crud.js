const baseURL = "https://my-api.com/users";

const getUsers = () => {
    return fetch(baseURL)
    .then(response => {
        if(!response.status === 200) throw new Error("Error al obtener los usuarios")
        else return response.json()
    })
    .catch(err => console.error(err))
}

const postUser = (nuevoUsuario) => {

    return fetch(baseURL, {method: 'POST', body: JSON.stringify(nuevoUsuario), headers: {'Content-Type':'application/json'}})
    .then(response => {
        if(!response.status === 201) throw new Error("Error al crear el usuario.")
        else return response.json();
    })
    .catch(error => console.error(error))
}

const updateUser = (id, usuario) => {
    return fetch(baseURL+"/"+id, {method: 'PUT', body: JSON.stringify(usuario), headers: {'Content-Type':'application/json'}})
    .then(response =>  {
        if(!response.status === 200) throw new Error("Error al actualizar el usuario.");
        else return response.json();
    })
    .catch(err => console.log(err));
}

const deleteUser = (id) => {
    return fetch(baseURL+"/"+id, {method: 'DELETE'})
    .then(response => {
        if(!response.status === 204) throw new Error("Error al eliminar el usuario")
        else return "Usuario eliminado con exito."
    })
    .catch(err => console.error(err))
}
