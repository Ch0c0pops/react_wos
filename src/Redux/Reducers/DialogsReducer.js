const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const addMessageActionCreator = (props) => ({type: ADD_MESSAGE, message: props});
export const updateMessageActionCreator = (props) => ({type: UPDATE_MESSAGE, message: props})




const initialState = {
    users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
    messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
    newDialogsMessage: ""
};

const DialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: stateCopy.messages.length + 1, msg: action.message}
            stateCopy.messages.push(newMessage)
            stateCopy.newDialogsMessage = ""
            return stateCopy
        case UPDATE_MESSAGE:
            stateCopy.newDialogsMessage = action.message
           return stateCopy
        default:
            return state
    }
}

export default DialogsReducer