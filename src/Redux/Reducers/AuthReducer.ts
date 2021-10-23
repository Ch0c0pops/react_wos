import {authAPI} from "../../API/authAPI";

const SET_AUTHORISED_USER_DATA = 'SET_AUTHORISED_USER_DATA';
const SET_AUTHORISED_USER_ID = 'SET_AUTHORISED_USER_ID';

export const setAuthorisedUserData = (data: InitialStateType): SetAuthorisedUserDataType => ({
    type: SET_AUTHORISED_USER_DATA,
    data
});
export const setAuthorisedUserId = (id: number): SetAuthorisedUserIdType => ({type: SET_AUTHORISED_USER_ID, id});

type SetAuthorisedUserDataType = {
    data: InitialStateType,
    type: typeof SET_AUTHORISED_USER_DATA
}

type SetAuthorisedUserIdType = {
    type: typeof SET_AUTHORISED_USER_ID
    id: number
}
export const setAuthorisedUserDataThunk = () => (dispatch: any) => {
    return authAPI.getAuthorisedUserData().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthorisedUserData(data.data))
            }
        }
    )
}

interface LoginType {
    rememberMe: boolean,
    password: string,
    email: string
}

export const loginThunk = (payload: LoginType) => async (dispatch: any) => {

    try{
        let response = await authAPI.login({...payload})
        if (response.data.resultCode === 0) {
            dispatch(setAuthorisedUserDataThunk())
        }
    }catch (e) {
        console.log(e)
    }



}

export const logoutThunk = () => async (dispatch: any) => {
    authAPI.logout().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthorisedUserData({id: null, login: null, email: null, isAuth: false}))
            }
        }
    )
}

interface InitialStateType {
    id: number | null
    login: string | null,
    email: string | null,
    isAuth: boolean | null
}

const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: null
};

type ActionTypes = SetAuthorisedUserDataType | SetAuthorisedUserIdType

const AuthReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTHORISED_USER_DATA:
            let {id, login, email, isAuth = true} = action.data

            return {
                ...state,
                ...{id, login, email, isAuth}
            }
        case SET_AUTHORISED_USER_ID:
            return {
                ...state,
                id: action.id,
                isAuth: true
            }
        default:
            return state
    }
}

export default AuthReducer;