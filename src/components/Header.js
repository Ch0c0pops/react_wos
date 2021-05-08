import React from "react"
import styles from '../Styles/Header.module.scss'
import {Redirect} from "react-router-dom";

export const LoggedIn = (props) => {
    return <div>
        <div> {props.login} </div>
        <button onClick={props.logoutThunk}>Logout</button>
    </div>
}


export const LoggedOut = (props) => {

    return <>
        {props.isAuth === false ? <Redirect to='/login'/> : null}
    </>
    //сразу редиректит при отрисовке, надо изменить по-умней
}


export const Header = (props) => {

    return (
        <div className={styles.Header}>
            <img src="https://toppng.com/uploads/preview/file-cloud-services-icon-115632110922fcsvb9ygr.png" alt=""/>

            {props.isAuth === true ? <LoggedIn logoutThunk={props.logoutThunk}
                                               login={props.login}/> : <LoggedOut isAuth={props.isAuth}/>}

        </div>
    )
}
