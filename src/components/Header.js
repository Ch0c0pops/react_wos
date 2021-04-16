import React from "react"
import styles from '../Styles/Header.module.scss'

const Header = (props) => {

    return (
        <div className={styles.Header}>
            <img src="https://toppng.com/uploads/preview/file-cloud-services-icon-115632110922fcsvb9ygr.png" alt=""/>

            {props.isAuth === true ? <div>{props.login}</div> : <a>login</a>}

        </div>
    )
}

export default Header