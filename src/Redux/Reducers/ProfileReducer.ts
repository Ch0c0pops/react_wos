import {profileAPI} from "../../API/profileAPI";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const GET_USER_STATUS = 'GET_USER_STATUS';

type AddPostACType = {
    type: typeof ADD_POST
    newPost: string
}
type UpdatePostACType = {
    type: typeof UPDATE_POST
    newPostMessage: string
}
type SetProfileACType = {
    type: typeof SET_PROFILE
    profileData: any
}
type UpdateUserStatusACType = {
    type: typeof SET_USER_STATUS
    status: string
}
type GetUserStatusACType = {
    type: typeof GET_USER_STATUS
    status: string
}
type ACTypes = AddPostACType | UpdatePostACType | SetProfileACType | UpdateUserStatusACType | GetUserStatusACType
export const addPostActionCreator = (props: string): AddPostACType => ({type: ADD_POST, newPost: props})
export const updatePostActionCreator = (props: string): UpdatePostACType => ({type: UPDATE_POST, newPostMessage: props})
export const setProfileActionCreator = (props: any): SetProfileACType => ({type: SET_PROFILE, profileData: props})
export const updateUserStatusActionCreator = (props: string): UpdateUserStatusACType => ({
    type: SET_USER_STATUS,
    status: props
})
export const getUserStatusActionCreator = (props: string): GetUserStatusACType => ({
    type: GET_USER_STATUS,
    status: props
})

export const getProfileThunk = (id: number) => async (dispatch: any) => {
    try {
        let response = await profileAPI.getProfile(id)
        dispatch(setProfileActionCreator(response))
    } catch (e) {
        console.log(e)
    }
}
export const getUserStatusThunk = (id: number) => async (dispatch: any) => {
    try {
        let response = await profileAPI.getStatus(id)
        dispatch(getUserStatusActionCreator(response))
    } catch (e) {
        console.log(e)
    }
}

export const setUserStatusThunk = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateUserStatus(status)//тут делаем санку с запросом пут и статусом из компоненты profileUserStatus
        dispatch(updateUserStatusActionCreator(response))

    } catch (e) {
        console.log(e)
    }
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type InitialStateType = {
    posts: Array<{ id: number, msg: string }>
    profileData: ProfileDataType | null
    userStatus: null | string
}
const initialState: InitialStateType = {
    posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
    profileData: null,
    userStatus: null
};

const ProfileReducer = (state = initialState, action: ACTypes): InitialStateType => {
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