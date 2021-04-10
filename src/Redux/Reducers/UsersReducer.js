const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGINATION = "SET_PAGINATION";
const CURRENT_PAGE = "CURRENT_PAGE";
const SET_READY = "SET_READY";


export const follow = (id) => ({type: FOLLOW, id: id})
export const unfollow = (id) => ({type: UNFOLLOW, id: id})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setPagination = (totalCount) => ({type: SET_PAGINATION, totalCount: totalCount})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage: currentPage})
export const setReady = (boolean) => ({type: SET_READY, isReady: boolean})

const initialState = {
    users: [],
    totalCount: 0,
    pageLimit: 10,
    currentPage: 1,
    isReady: false
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_PAGINATION:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_READY:
            return {
                ...state,
                isReady: action.isReady
            }
        default:
            return state
    }
}

export default UsersReducer;