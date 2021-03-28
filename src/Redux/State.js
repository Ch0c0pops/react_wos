/*
import DialogsReducer from "./Reducers/DialogsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";


const store = {
    state: {
        dialogsData: {
            users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
            messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
            newDialogsMessage: ""
        },
        profileData: {
            posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
            newPostMessage: ""
        }
    },
    dispatch(action) {
        this.state.dialogsData = DialogsReducer(this.state.dialogsData, action)
        this.state.profileData = ProfileReducer(this.state.profileData, action)
        this.appRender()

    },
    appRender() {
        console.log('hi')
    },
    appRenderListener(callback) {
        this.appRender = callback
    },
    addPostHandler(event) {
        this.state.profileData.newPostMessage = event.target.value
        this.appRender()
    },
    dialogsMessageHandler(event) {
        this.state.dialogsData.newDialogsMessage = event.target.value
        this.appRender()
    }

};

export default store
*/
