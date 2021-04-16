import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";


const reducers = combineReducers({
    dialogs: DialogsReducer,
    profile: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

const store = createStore(reducers);

window.store = store
export default store
