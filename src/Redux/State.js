const store = {
    state: {
        dialogsData: {
            users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
            messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
        },
        profileData: {
            posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
            newPostMessage: ""
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
    addPost() {
        let newPost = {
            id: this.state.profileData.posts.length + 1,
            msg: this.state.profileData.newPostMessage
        }
        this.state.profileData.posts.push(newPost)
        this.state.profileData.newPostMessage = ""

        this.appRender()
    }
};

export default store
