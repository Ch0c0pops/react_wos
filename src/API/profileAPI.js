import instance from "./axiosInstance";

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(
            response => response.data
        )
    }
}
