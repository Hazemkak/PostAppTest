import axios from 'axios';
export function getPosts(){
    return axios.get('http://127.0.0.1:8000/posts');
}

export function savePost(packet){
    return axios.post('http://127.0.0.1:8000/posts', packet)
}