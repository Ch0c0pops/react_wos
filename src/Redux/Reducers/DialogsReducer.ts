const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_MESSAGE = "UPDATE_MESSAGE"

type AddMessageACType ={
    type: typeof ADD_MESSAGE
    message: string
}

type UpdateMessageACType ={
    type: typeof UPDATE_MESSAGE
    message: string
}

export const addMessageActionCreator = (props: string): AddMessageACType => ({type: ADD_MESSAGE, message: props})
export const updateMessageActionCreator = (props: string): UpdateMessageACType => ({type: UPDATE_MESSAGE, message: props})

interface IdType{
    id: number
}
interface UsersType extends IdType{
    username: string
}
interface MessagesType extends IdType{
    msg: string
}

type InitialStateType={
    users: Array<UsersType>
    messages: Array<MessagesType>
    newDialogsMessage: string
}

const initialState: InitialStateType = {
    users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
    messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
    newDialogsMessage: ""
};

const DialogsReducer = (state = initialState, action: UpdateMessageACType | AddMessageACType): InitialStateType => {

    let stateCopy = {...state}

    switch (action.type) {

        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, {id: stateCopy.messages.length + 1, msg: action.message}],
                newDialogsMessage: ""
            }

        case UPDATE_MESSAGE:
            return {
                ...state,
                newDialogsMessage: action.message
            }
        default:
            return state
    }
}

export default DialogsReducer