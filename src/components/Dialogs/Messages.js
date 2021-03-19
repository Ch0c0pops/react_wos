import React from "react";
import styles from "./../../Styles/Dialogs.module.scss";

const CurrentMessage = ({msg}) => {
    return (
        <div className={styles.message}>
            <span>{msg}</span>
        </div>
    )
}

const Messages = (props) => {
    return (
        <CurrentMessage msg={props.msg}/>
    )
}
export default Messages
