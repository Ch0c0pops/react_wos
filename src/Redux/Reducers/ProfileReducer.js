import {profileAPI} from "../../API/profileAPI";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const GET_USER_STATUS = 'GET_USER_STATUS';

export const addPostActionCreator = (props) => ({type: ADD_POST, newPost: props})
export const updatePostActionCreator = (props) => ({type: UPDATE_POST, newPostMessage: props})
export const setProfileActionCreator = (props) => ({type: SET_PROFILE, profileData: props})
export const updateUserStatusActionCreator = (props) => ({type: SET_USER_STATUS, status: props})
export const getUserStatusActionCreator = (props) => ({type: GET_USER_STATUS, status: props})

export const getProfileThunk = (id) => (dispatch) => {
    profileAPI.getProfile(id).then(
        data => dispatch(setProfileActionCreator(data))
    )

}
export const getUserStatusThunk = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(
        data => dispatch(getUserStatusActionCreator(data))
    )
}

export const setUserStatusThunk = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(                             //тут делаем санку с запросом пут и статусом из компоненты profileUserStatus
        data => dispatch(updateUserStatusActionCreator(data))
    )
}

const initialState = {
    posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
    profileData: null,
    userStatus: null
};

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    msg: action.newPost
                }],
            }

        case SET_PROFILE:
            return {

                ...state,
                profileData: action.profileData
            }
        case SET_USER_STATUS:
            return {
                ...state
            }
        case GET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        default:
            return state
    }
}

export default ProfileReducer