import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirectHOC from "../../HOC/withAuthRedirectHOC";
import {compose} from "redux";


const mapStateToProps = (state) => {

    return {
        DialogsMessagesData: state.dialogs.messages,
        DialogsUsersData: state.dialogs.users,
        newDialogsMessage: state.dialogs.newDialogsMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            let data = e.target.value
            dispatch(updateMessageActionCreator(data))
        },
        addNewMessageHandler: (msg) => {
            dispatch(addMessageActionCreator(msg))        //почему-то при первоначальной отрисовке переадресует на логин, надо исправить
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirectHOC)(Dialogs)