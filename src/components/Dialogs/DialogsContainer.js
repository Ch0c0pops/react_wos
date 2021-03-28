import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    const changeHandler = (e) => {
        let data = e.target.value
        props.dispatch(updateMessageActionCreator(data))
    };

    const clickHandler = (value) => {
        props.dispatch(addMessageActionCreator(value))
    }
    return (
        <Dialogs changeHandler={changeHandler} clickHandler={clickHandler} DialogsUsersData={props.dialogs.users}
                 DialogsMessagesData={props.dialogs.messages} newDialogsMessage={props.dialogs.newDialogsMessage}/>
    )
}

export default DialogsContainer;