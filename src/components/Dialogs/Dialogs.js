import React from "react";
import styles from "./../../Styles/Dialogs.module.scss";
import UsersList from "./UsersList";
import Messages from "./Messages";
import {addMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";


const Dialogs = (props) => {

    const newMessage = React.createRef()

    const mappedDialogsUsersData = props.DialogsUsersData.map(obj => <UsersList key={obj.id}
                                                                                username={obj.username}
                                                                                id={obj.id}/>)
    const mappedDialogsMessagesData = props.DialogsMessagesData.map(obj => <Messages key={obj.id}
                                                                                     msg={obj.msg}
                                                                                     id={obj.id}/>)

    return (
        <div className={styles.dialogs_wrapper}>
            <div>
                {mappedDialogsUsersData}
            </div>
            <div className={styles.border}></div>
            <div className={styles.messages}>
                {mappedDialogsMessagesData}
                <div>
                    <textarea placeholder={'Введите сообщение'}
                              value={props.newDialogsMessage}
                              onChange={props.dialogsMessageHandler}
                              ref={newMessage}/>
                </div>
                <div>
                    <button onClick={() => {
                        props.dispatch(addMessageActionCreator(newMessage.current.value))
                    }}>Отправить
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs