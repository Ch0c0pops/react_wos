const ADD_POST = "ADD_POST";
const ADD_MESSAGE = "ADD_MESSAGE";

export const addPostActionCreator = (props) => ({type: ADD_POST, newPost: props.newPost}) // я бы вынес отдельно..потом
export const addMessageActionCreator = (props) =>  ({type: ADD_MESSAGE, message: props})


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
        if (action.type === "ADD_POST") {
            let newPost = {
                id: this.state.profileData.posts.length + 1,
                msg: this.state.profileData.newPostMessage
            }
            this.state.profileData.posts.push(newPost)
            this.state.profileData.newPostMessage = ""
            this.appRender()
        } else if(action.type === "ADD_MESSAGE"){
            debugger
            let newMessage = {id: this.state.dialogsData.messages.length + 1, msg: action.message}
            this.state.dialogsData.messages.push(newMessage)
            this.state.dialogsData.newDialogsMessage = ""
            this.appRender()
        }

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
    dialogsMessageHandler(event){
        this.state.dialogsData.newDialogsMessage = event.target.value
        this.appRender()
    }

};

export default store
