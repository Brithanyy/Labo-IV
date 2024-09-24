import { getUsers } from "./users.js";
import { fromUsers } from "./users.js";
import { usuarios } from "./users.js";
import { getTodos } from "./todos.js";
import { fromTodos } from "./todos.js";
import { getPhotos } from "./photos.js";
import { fromPhotos } from "./photos.js";
import { getAlbums } from "./albums.js";
import { fromAlbums } from "./albums.js";

const users = [];
const todos = [];
const photos = [];
const albums = [];

usuarios()
    .then(data => {
        for (let user of data) {
            users.push(JSON.stringify(user));
        }
        console.log("MOSTRANDO LOS USUARIOS EN EL ARREGLO");
        console.log(users[0]);
    })
    .catch(err => console.error(err));

