import React from "react"
import styles from '../Styles/Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <NavLink to="/" className={styles.btn}>
                Profile
            </NavLink>
            <NavLink to="/dialogs" className={styles.btn}>
                Dialogs
            </NavLink>
            <NavLink to="/users" className={styles.btn}>
                Users
            </NavLink>
            <NavLink to="/news" className={styles.btn}>
                News
            </NavLink>
            <NavLink to="/music" className={`${styles.btn} ${styles.active}`}>
                Music
            </NavLink>
            <NavLink to="/settings" className={styles.btn}>
                Settings
            </NavLink>

        </div>
    )
}

export default Nav