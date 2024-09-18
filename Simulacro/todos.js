const api = 'https://jsonplaceholder.typicode.com/todos';
const usersJson = 'http://localhost:3000/todos';

export const getTodos = () => {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (let dataTest of data) {
                console.log(dataTest);
            }
        })
        .catch(err => console.error(err))
};

// getTodos();

export const fromTodos = () => {
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

// fromTodos();