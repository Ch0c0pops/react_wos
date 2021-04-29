import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/Store";
import ReactDOM from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import ConnectedAppContainer from "./AppContainer";

export const appRender = (props) => {


    return (
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store} >

                    <ConnectedAppContainer/>

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
