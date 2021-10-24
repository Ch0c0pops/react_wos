import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AppReducer from "./Reducers/AppReducer";
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'


const reducers = combineReducers({
    app: AppReducer,
    dialogs: DialogsReducer,
    profile: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});
//----------старая версия создания store и подключения redux devtools на redux, до установки redux toolkit-------------
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
//---------------------------------------------------------------------------------------------------------------------

const store = configureStore({reducer: reducers, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)});

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

// @ts-ignore
window.store = store
export default store

