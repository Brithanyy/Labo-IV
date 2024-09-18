const api = 'https://jsonplaceholder.typicode.com/photos';
const usersJson = 'http://localhost:3000/photos';

export const getPhotos = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (let dataTest of data) {
                console.log(dataTest);
            }
        })
        .catch(err => console.error(err))
};

// getPhotos();

export const fromPhotos = () => {
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

// fromPhotos();