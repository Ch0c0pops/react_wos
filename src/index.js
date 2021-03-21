import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const appRender = () => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <App state={store.state}
                     dispatch={store.dispatch.bind(store)}                    //связываем коллбэк функцию со store,
                     addPostHandler={store.addPostHandler.bind(store)}/>
            </React.StrictMode>,                                            //во избежание потери this,
            document.getElementById('root')                     //контекст (this) потеряется в коллбэке при его вызове
        )                                                               // в итоговой компоненте, потому что будет вызван,
    )                                                                   //например, от имени props onChange={props.callback}
};

appRender();

store.appRenderListener(appRender);

reportWebVitals();
