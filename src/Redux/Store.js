import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    dialogs: DialogsReducer,
    profile: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store
