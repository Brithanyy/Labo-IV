
// async function apiJsonPlaceHolder() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         let data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//     }
// }  
// let todos = apiJsonPlaceHolder()
//     .then(resolve => {
//         resolve[0].title = "Brisa Ortiz"
//         console.log(resolve[0]); ///Accedemos al primer elemento
//     }) 
//     .catch(error => console.log(error));


// let titulosApi = apiJsonPlaceHolder()
//     .then(resolve => {
//         let titulos = [];
//         console.log(resolve)
//         for(let i = 0; i<200; i++){
//             titulos[i]=resolve[i]["title"]
//         }

//         console.log(titulos)
//     })
//     .catch(error => console.log(error));

const api = 'https://jsonplaceholder.typicode.com/users';
const usersJson = 'http://localhost:3000/users';

export const getUsers = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (let dataTest of data) {
                console.log(dataTest);
            }
        })
        .catch(err => console.error(err))
};


export const fromUsers = () => {
    fetch(api) 
        .then(response => response.json())
        .then(data => {
            for (let user of data) {
                fetch(usersJson, {headers: {'Content-Type': "application/json"},method: "POST", body: JSON.stringify(user)})
                .catch(err => console.error(err))
            }
        })
        .catch(err => console.error(err))
} 

export const usuarios = () => {
    return fetch(usersJson)
        .then(response => response.json())
        .catch(err => console.error(err))
}
