import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import {combineReducers, createStore} from "redux";


const reducers =combineReducers({
    dialogs: DialogsReducer,
    profile: ProfileReducer
});

const store = createStore(reducers);

export default store
