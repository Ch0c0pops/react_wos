import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        DialogsMessagesData: state.dialogs.messages,
        DialogsUsersData: state.dialogs.users,
        newDialogsMessage: state.dialogs.newDialogsMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            let data = e.target.value
            dispatch(updateMessageActionCreator(data))
        },
        clickHandler: (value) => {
            dispatch(addMessageActionCreator(value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;