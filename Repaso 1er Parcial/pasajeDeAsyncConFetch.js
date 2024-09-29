//! Dado el siguiente codigo con promesas, reescribir utilizando async/await

const getUsers = () => {
    return fetch("https://api.example.com/users")
}

//! Utilizando async y await
const urlBase = "https://api.example.com/users"

async function getUsersAsync() {
    try {
        const response = await fetch(urlBase);
        if(!response.ok) throw new Error("Error al obtener la informacion");
        
        const users = await response.json();

        const filterUser = users.filter(user => user.isActive).sort((a,b) => a.username.localeCompare(b.username));

        for (const user of filterUser) {
            console.log(user);
        }
    } catch (error) {
        console.error(error);
    }
}

//! Utilizando fetch y catch
const getUsersFetch = () => {
    return fetch(baseURL)
    .then(response => {
        if(!response.ok) throw new Error("Error al obtener la informacion");
        return response.json();
    })
    .then(users => {
        const filterUsers = users.filter(user => user.isActive).sort((a,b) => a.username.localeCompare(b.username));

        for (const usuarios of filterUsers) {
            console.log(usuarios);
        }
    })
    .catch(err => console.error(err))
}

