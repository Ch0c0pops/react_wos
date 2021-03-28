import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const appRender = (state) => {

    return (
        ReactDOM.render(
            <React.StrictMode>
                <App state={state}
                     store={store}
                     dispatch={store.dispatch.bind(store)}                    //связываем коллбэк функцию со store,
                    /* addPostHandler={store.addPostHandler.bind(store)}*/
                    /* dialogsMessageHandler={store.dialogsMessageHandler.bind(store)}*//>
            </React.StrictMode>,                                            //во избежание потери this,
            document.getElementById('root')                     //контекст (this) потеряется в коллбэке при его вызове
        )                                                               // в итоговой компоненте, потому что будет вызван,
    )                                                                   //например, от имени props onChange={props.callback}
};

appRender(store.getState());



store.subscribe(()=>{
    let state = store.getState()
    appRender(state)
})
reportWebVitals();
