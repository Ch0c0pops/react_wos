const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followActionCreator = (id) => ({type: FOLLOW, id: id})
export const unfollowActionCreator = (id) => ({type: UNFOLLOW, id: id})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users})

const initialState={users:[]};

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
        default:
            return state
    }
}

export default UsersReducer;