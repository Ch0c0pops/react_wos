import instance from "./axiosInstance";

export const authAPI = {
    getAuthorisedUserData() {
        return instance.get(`auth/me`).then(
            response => response.data
        )
    }
}