import instance from "./axiosInstance";

export const authAPI = {
    getAuthorisedUserData() {
        return instance.get(`auth/me`).then(
            response => response.data
        )
    },
    login(payload){
        return instance.post(`auth/login`, {...payload}).then(
            response => response.data
        )
    },
    logout(){
        return instance.delete(`auth/login`).then(
            response => response.data
        )
    }
}