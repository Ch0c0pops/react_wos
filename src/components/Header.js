import React from "react"
import styles from '../Styles/Header.module.scss'
import {Redirect} from "react-router-dom";

export const LoggedIn = (props) => {
    return <div>
        <div> {props.login} </div>
        <button onClick={props.logoutThunk}>Logout</button>
    </div>
}


export const LoggedOut = () => {
    return <Redirect to='/login'/>
}


export const Header = (props) => {

    return (
        <div className={styles.Header}>
            <img src="https://toppng.com/uploads/preview/file-cloud-services-icon-115632110922fcsvb9ygr.png" alt=""/>
            <h2>My social network</h2>
            <div className={styles.login}> {props.isAuth === true ? <LoggedIn logoutThunk={props.logoutThunk}
                                                     login={props.login}/> : <LoggedOut/>}</div>


        </div>
    )
}
