import React from "react";
import styles from "./../../Styles/Dialogs.module.scss";
import UsersList from "./UsersList";
import Messages from "./Messages";


const Dialogs = ({DialogsMessagesData, DialogsUsersData}) => {

    const mappedDialogsUsersData = DialogsUsersData.map(obj => <UsersList key={obj.id} username={obj.username} id={obj.id}/>)
    const mappedDialogsMessagesData = DialogsMessagesData.map(obj => <Messages key={obj.id} msg={obj.msg} id={obj.id}/>)

    return (
        <div className={styles.dialogs_wrapper}>
            <div>
                {mappedDialogsUsersData}
            </div>
            <div className={styles.border}></div>
            <div className={styles.messages}>
                {mappedDialogsMessagesData}
            </div>
        </div>
    )
}

export default Dialogs