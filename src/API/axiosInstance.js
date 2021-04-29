import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-key': '4a421e6e-e283-4740-8777-9e1e2bbc50bd'
    }
})


export default instance