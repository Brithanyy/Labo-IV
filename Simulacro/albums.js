const api = 'https://jsonplaceholder.typicode.com/albums';
const usersJson = 'http://localhost:3000/albums';

export const getAlbums = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (let dataTest of data) {
                console.log(dataTest);
            }
        })
        .catch(err => console.error(err))
};


export const fromAlbums = () => {
    fetch(api) 
        .then(response => response.json())
        .then(data => {
            for (let todo of data) {
                fetch(usersJson, {method: 'POST', body: JSON.stringify(todo)})
                .catch(err => console.error(err))
            }
        })
        .catch(err => console.error(err))
} 

