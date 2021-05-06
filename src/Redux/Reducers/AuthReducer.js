import {authAPI} from "../../API/authAPI";

const SET_AUTHORISED_USER_DATA = 'SET_AUTHORISED_USER_DATA';
const SET_AUTHORISED_USER_ID = 'SET_AUTHORISED_USER_ID';

export const setAuthorisedUserData = (data) => ({type: SET_AUTHORISED_USER_DATA, data});
export const setAuthorisedUserId = (id) => ({type: SET_AUTHORISED_USER_ID, id});

export const setAuthorisedUserDataThunk = () => (dispatch) => {
    authAPI.getAuthorisedUserData().then(
        data => {
            if (data.resultCode === 0) {
                dispatch(setAuthorisedUserData(data.data))
            } else if (data.resultCode === 1) {
                console.log('hey ')                         // тут заглушка
            }
        }
    )
}

export const loginThunk = (payload) => (dispatch) => {
    authAPI.login({...payload}).then(
        data => {
            if (data.resultCode === 0) {
               dispatch(setAuthorisedUserId(data.data.userId))
            }
        }
    )
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORISED_USER_DATA:
            let {id, login, email} = action.data

            return {
                ...state,
                ...{id, login, email},
                isAuth: true
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