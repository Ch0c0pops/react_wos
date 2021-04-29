import instance from "./axiosInstance";

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(
            response => response.data
        )
    },
    updateUserStatus(status){
        return instance.put(`profile/status`, {status}).then(
            response => response.data
        )
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`).then(
            response => response.data
        )
    }
}
