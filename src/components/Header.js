import React from "react"
import styles from '../Styles/Header.module.scss'
import {Redirect} from "react-router-dom";

export const LoggedIn = (props) => {
    return <div>
        <div> {props.login} </div>
        <div onClick={()=>alert('yo')}> Logout</div>
    </div>
}


export const LoggedOut = (props) => {

    return <>
        {props.isAuth === false ?  <Redirect to='/login'/> : null}
    </>
                //сразу редиректит при отрисовке, надо изменить по-умней
}


export const Header = (props) => {

    return (
        <div className={styles.Header}>
            <img src="https://toppng.com/uploads/preview/file-cloud-services-icon-115632110922fcsvb9ygr.png" alt=""/>

            {props.isAuth === true ? <LoggedIn login={props.login}/> : <LoggedOut isAuth={props.isAuth}/>}

        </div>
    )
}
