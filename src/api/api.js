import axios from "axios";

export function getArticles(){
    return new Promise((resolve, reject) => {
        axios.get('/posts')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            })
    })
}
export function getArticle(val){
    return new Promise((resolve, reject) => {
        axios.get('/posts/' + val)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            })
    })
}