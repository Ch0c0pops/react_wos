import {setAuthorisedUserDataThunk} from "./AuthReducer";

const INITIALISE_APP_DATA = 'INITIALISE_APP_DATA'

export const appDataInitialised = () => ({type: INITIALISE_APP_DATA})

export const getAppInitialDataThunk =()=>(dispatch)=>{
   let promise = dispatch(setAuthorisedUserDataThunk())
    Promise.all([promise]).then(
        ()=> dispatch(appDataInitialised())
    )
}
const initialState = {
    appInitialised: false
}

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISE_APP_DATA:
            return {
                ...state,
                appInitialised: true
            }
        default: return state
    }
}

export default AppReducer