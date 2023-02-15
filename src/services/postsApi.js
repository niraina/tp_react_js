import axios from 'axios';

function findAll() {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=12',{
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => response.data)
}

function findOnePost(id) {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.data)
}

function user(id) {
    return axios
        .get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.data)
}

function comments(id) {
    return axios
        .get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
        .then(response => response.data)
}

export default {
    findAll,
    findOnePost,
    user,
    comments,
}