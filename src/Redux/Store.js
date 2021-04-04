import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";


const reducers = combineReducers({
    dialogs: DialogsReducer,
    profile: ProfileReducer,
    usersPage: UsersReducer
});

const store = createStore(reducers);

window.store = store
export default store
