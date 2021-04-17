import instance from "./axiosInstance";

export const usersAPI = {
    getUsers(pageLimit, currentPage) {
        return instance.get(`users?count=${pageLimit}&page=${currentPage}`)
    },

    getCurrentPage(pageLimit, p) {
        return instance.get(`users?count=${pageLimit}&page=${p}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(
            response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(
            response => response.data)
    }
}
