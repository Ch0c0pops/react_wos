const SET_AUTHORISED_USER_DATA = 'SET_AUTHORISED_USER_DATA';


export const setAuthorisedUserData = (data) => ({type: SET_AUTHORISED_USER_DATA, data})

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
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

        default:
            return state
    }
}

export default AuthReducer;