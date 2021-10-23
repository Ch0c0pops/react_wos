import {setAuthorisedUserDataThunk} from "./AuthReducer";
import {Dispatch} from "redux";

const INITIALISE_APP_DATA = 'INITIALISE_APP_DATA'

type appDataInitialisedType = {
    type: typeof INITIALISE_APP_DATA
}
type initStateType = {
    appInitialised: boolean
}


export const appDataInitialised = ():appDataInitialisedType => ({type: INITIALISE_APP_DATA})

export const getAppInitialDataThunk = () => (dispatch: any) => {
    let promise = dispatch(setAuthorisedUserDataThunk())
    Promise.all([promise]).then(
        () => dispatch(appDataInitialised())
    )
}

const initialState: initStateType = {
    appInitialised: false
}

const AppReducer = (state = initialState, action: appDataInitialisedType) => {

    switch (action.type) {
        case INITIALISE_APP_DATA:
            return {
                ...state,
                appInitialised: true
            }
        default:
            return state
    }
}

export default AppReducer