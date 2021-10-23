import {usersAPI} from "../../API/usersAPI"
import {UsersReducerInitialStateType, UserType} from "../../types"


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGINATION = "SET_PAGINATION"
const CURRENT_PAGE = "CURRENT_PAGE"
const SET_READY = "SET_READY"
const ACTIVATE_BUTTON = "ACTIVATE_BUTTON"
const DISABLE_BUTTON = "DISABLE_BUTTON"

type FollowType = { type: typeof FOLLOW, id: number }
type UnfollowType = { type: typeof UNFOLLOW, id: number }
type SetUsersType = { type: typeof SET_USERS, users: any }
type SetPaginationType = { type: typeof SET_PAGINATION, totalCount: number }
type SetCurrentPageType = { type: typeof CURRENT_PAGE, currentPage: number }
type SetReadyType = { type: typeof SET_READY, isReady: boolean }
type ActivateButtonType = { type: typeof ACTIVATE_BUTTON, userId: number }
type DisableButtonType = { type: typeof DISABLE_BUTTON, userId: number }
type UserReducerTypes = FollowType | UnfollowType | SetUsersType | SetPaginationType |
    SetCurrentPageType | SetReadyType | ActivateButtonType | DisableButtonType

export const follow = (id: number): FollowType => ({type: FOLLOW, id})
export const unfollow = (id: number): UnfollowType => ({type: UNFOLLOW, id})
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
export const setPagination = (totalCount: number): SetPaginationType => ({type: SET_PAGINATION, totalCount})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: CURRENT_PAGE, currentPage})
export const setReady = (isReady: boolean): SetReadyType => ({type: SET_READY, isReady})
export const activateButton = (userId: number): ActivateButtonType => ({type: ACTIVATE_BUTTON, userId})
export const disableButton = (userId: number): DisableButtonType => ({type: DISABLE_BUTTON, userId})


export const getUsersThunkCreator = (pageLimit: number, currentPage: number) => (dispatch: any) => {
    usersAPI.getUsers(pageLimit, currentPage)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setPagination(response.data.totalCount))
            dispatch(setReady(true))
        })
}

export const getCurrentPageThunk = (p: number, pageLimit: number) => (dispatch: any) => {
    dispatch(setReady(false))
    dispatch(setCurrentPage(p))
    usersAPI.getCurrentPage(pageLimit, p)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setPagination(response.data.totalCount))
            dispatch(setReady(true))
        })
}

export const followUserThunk = (userId: number) => (dispatch: any) => {
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

export const unfollowUserThunk = (userId: number) => (dispatch: any) => {

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

const initialState: UsersReducerInitialStateType = {
    users: [],
    totalCount: 0,
    pageLimit: 10,
    currentPage: 1,
    isReady: false,
    disabledButtonsId: []
};

const UsersReducer = (state = initialState, action: UserReducerTypes): UsersReducerInitialStateType => {

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