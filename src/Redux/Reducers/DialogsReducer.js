const ADD_MESSAGE = "ADD_MESSAGE";
export const addMessageActionCreator = (props) =>  ({type: ADD_MESSAGE, message: props})

const initialState = {
    users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
    messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
    newDialogsMessage: ""
};

const DialogsReducer = (state = initialState, action) => {
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