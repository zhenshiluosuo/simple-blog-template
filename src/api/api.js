import axios from "axios";

export function getArticles(){
    return new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}
export function getArticle(val){
    return new Promise((resolve, reject) => {
        axios.get('http://jsonplaceholder.typicode.com/posts/' + val)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}