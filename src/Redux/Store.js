import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AppReducer from "./Reducers/AppReducer";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    app: AppReducer,
    dialogs: DialogsReducer,
    profile: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store
export default store

