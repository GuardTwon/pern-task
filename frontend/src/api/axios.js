import axios from 'axios';

const baseURL=import.meta.env.VITE_BACKEND||"http://127.0.0.1:3000/api"

const client =axios.create({
    baseURL:baseURL,
    withCredentials:true
})
export default client