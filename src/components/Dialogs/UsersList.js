import React from "react";
import styles from "./../../Styles/Dialogs.module.scss";

const UsersList = (props) => {
    return (
        <div className={styles.usersList}>
            <img
                 src="https://styles.redditmedia.com/t5_1v9k9m/styles/profileIcon_snoob396e656-fbe8-46d7-849e-636c85824655-headshot.png?width=256&height=256&crop=256:256,smart&s=3aa9a7ceea08ef8056ba9e22dc1845da86f48d98"
                 alt=""/>
            <div>{props.username}</div>
        </div>
    )
}

export default UsersList