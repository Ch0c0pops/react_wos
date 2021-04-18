import {usersAPI} from "../../API/usersAPI";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGINATION = "SET_PAGINATION";
const CURRENT_PAGE = "CURRENT_PAGE";
const SET_READY = "SET_READY";
const ACTIVATE_BUTTON = "ACTIVATE_BUTTON";
const DISABLE_BUTTON = "DISABLE_BUTTON";


export const follow = (id) => ({type: FOLLOW, id})
export const unfollow = (id) => ({type: UNFOLLOW, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPagination = (totalCount) => ({type: SET_PAGINATION, totalCount})
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const setReady = (boolean) => ({type: SET_READY, isReady: boolean})
export const activateButton = (userId) => ({type: ACTIVATE_BUTTON, userId})
export const disableButton = (userId) => ({type: DISABLE_BUTTON, userId})


export const getUsersThunkCreator = (pageLimit, currentPage) => (dispatch) => {
    usersAPI.getUsers(pageLimit, currentPage)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setPagination(response.data.totalCount))
            dispatch(setReady(true))
        })
}

export const getCurrentPageThunk = (p, pageLimit) => (dispatch) => {
    dispatch(setReady(false))
    dispatch(setCurrentPage(p))
    usersAPI.getCurrentPage(pageLimit, p)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setPagination(response.data.totalCount))
            dispatch(setReady(true))
        })
}

export const followUserThunk = (userId) => (dispatch) => {
    dispatch(disableButton(userId))
    usersAPI.follow(userId)
        .then(
            data => {
                dispatch(activateButton(userId))
                if (data.resultCode === 0) {
                    dispatch(follow(userId))

                }
            }
        )
}

export const unfollowUserThunk = (userId) => (dispatch) => {

    dispatch(disableButton(userId))
    usersAPI.unfollow(userId)
        .then(
            data => {
                dispatch(activateButton(userId))
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))

                }
            }
        )
}


const initialState = {
    users: [],
    totalCount: 0,
    pageLimit: 10,
    currentPage: 1,
    isReady: false,
    disabledButtonsId: []
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
        case DISABLE_BUTTON:

            return {
                ...state,
                disabledButtonsId: [...state.disabledButtonsId, action.userId]

            }
        case ACTIVATE_BUTTON:
            return {
                ...state,
                disabledButtonsId: state.disabledButtonsId.filter(i => i !== action.userId)

            }
        default:
            return state
    }
}

export default UsersReducer;