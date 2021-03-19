import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, addPostHandler, appRenderListener, state} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const appRender = (props) => {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <App state={props.state} addPost={addPost} addPostHandler={addPostHandler}/>
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}

appRender({state});

appRenderListener(appRender);

reportWebVitals();
