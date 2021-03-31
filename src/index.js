import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";

export const appRender = (props) => {


    return (
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store} >

                    <App/>

                </Provider>

            </React.StrictMode>,
            document.getElementById('root')
        )
    )
};

appRender(store.getState());


// store.subscribe(() => {
//     let state = store.getState()
//     appRender(state)
//     console.log('render')
// })
reportWebVitals();
