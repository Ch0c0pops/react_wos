import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-key': '2cf1f3d1-1662-44de-865d-16e2be373296'
    }
})


export default instance