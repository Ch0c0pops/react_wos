const ADD_MESSAGE = "ADD_MESSAGE";
export const addMessageActionCreator = (props) =>  ({type: ADD_MESSAGE, message: props})

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: state.messages.length + 1, msg: action.message}
            state.messages.push(newMessage)
            state.newDialogsMessage = ""
            return state

        default:
            return state
    }
}

export default DialogsReducer